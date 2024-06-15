import { getConnection } from "../../database/connection.js";
import sql from "mssql";

// Controlador para crear Cobro, Pedido, DetallePedido y Envio
export const createPedido = async (req, res) => {
    const { IdPersona, MontoTotal, IdMetPago, IdDivisa, IdInformacionTarjeta, NumComprobante, DetallesPedido, IdDireccion, DireccionTemporal, Envio, CitaMedica } = req.body;

    try {
        const pool = await getConnection();

        // Crear Cobro
        const cobroResult = await pool.request()
            .input('IdDivisa', sql.Int, IdDivisa)
            .input('IdMetPago', sql.Int, IdMetPago)
            .query('exec CobroCrear @IdDivisa, @IdMetPago');

        const IdCobro = cobroResult.recordset[0].IdCobro;

        // Validar el valor de CitaMedica
        const citaMedicaValue = CitaMedica === undefined || CitaMedica === null ? 0 : CitaMedica;

        // Crear Pedido
        const pedidoResult = await pool.request()
            .input('FechaPedido', sql.Date, new Date())
            .input('MontoTotal', sql.Decimal(18, 2), MontoTotal)
            .input('IdPersona', sql.Int, IdPersona)
            .input('IdCobro', sql.Int, IdCobro)
            .input('EstadoPedido', sql.Int, 1)
            .input('Envio', sql.Bit, Envio) // Nuevo parámetro
            .input('CitaMedica', sql.Bit, citaMedicaValue) // Nuevo parámetro
            .query('exec PedidoCrear @FechaPedido, @MontoTotal, @IdPersona, @IdCobro, @EstadoPedido, @Envio, @CitaMedica');

        const IdPedido = pedidoResult.recordset[0].IdPedido;

        // Crear Detalles de Pedido
        for (const detalle of DetallesPedido) {
            await pool.request()
                .input('Cantidad', sql.Int, detalle.Cantidad)
                .input('MontoTotal', sql.Decimal(18, 2), detalle.MontoTotal)
                .input('IdProducto', sql.Int, detalle.IdProducto)
                .input('IdPedido', sql.Int, IdPedido)
                .query('exec DetallesPedidoCrear @Cantidad, @MontoTotal, @IdProducto, @IdPedido');

            console.log("Id Producto: ", detalle.IdProducto); 
            console.log("Id Sucursal: ", detalle.IdSucursal);
            console.log("Nueva Cantidad: ", detalle.NuevaCantidad);
            
            // Actualizar cantidad en almacenamiento
            await pool.request()
                .input('IdProducto', sql.Int, detalle.IdProducto)
                .input('IdSucursal', sql.Int, detalle.IdSucursal)
                .input('NuevaCantidad', sql.Int, detalle.NuevaCantidad)
                .query('exec AlmacenamientoModificarCantPro @IdProducto, @IdSucursal, @NuevaCantidad');
        }

        // Crear registro en tabla Tarjeta si el método de pago es tarjeta
        if (IdMetPago === 3 || IdMetPago === 4) {
            if (!IdInformacionTarjeta) {
                return res.status(400).json({ message: 'Debe seleccionar una tarjeta o agregar una nueva.' });
            }
            await pool.request()
                .input('IdInformacionTarjeta', sql.Int, IdInformacionTarjeta)
                .input('IdCobro', sql.Int, IdCobro)
                .query('exec TarjetaCrear @IdInformacionTarjeta, @IdCobro');
        }

        // Crear registro en tabla Sinpe si el método de pago es Sinpe
        if (IdMetPago === 2) {
            if (!NumComprobante) {
                return res.status(400).json({ message: 'Debe ingresar un número de comprobante.' });
            }
            await pool.request()
                .input('NumComprobante', sql.VarChar, NumComprobante)
                .input('IdCobro', sql.Int, IdCobro)
                .query('exec SinpeCrear @NumComprobante, @IdCobro');
        }

        // Crear registro en tabla Transferencia si el método de pago es Transferencia
        if (IdMetPago === 5) {
            if (!NumComprobante) {
                return res.status(400).json({ message: 'Debe ingresar un número de comprobante.' });
            }
            await pool.request()
                .input('NumComprobante', sql.VarChar, NumComprobante)
                .input('IdCobro', sql.Int, IdCobro)
                .query('exec TransferenciaCrear @NumComprobante, @IdCobro');
        }

        // Crear registro en tabla Efectivo si el método de pago es Efectivo
        if (IdMetPago === 1) {
            await pool.request()
                .input('IdCobro', sql.Int, IdCobro)
                .query('exec EfectivoCrear @IdCobro');
        }

        if (Envio) {
            // Obtener la dirección completa para crear el envío
            let direccionCompleta;

            if (DireccionTemporal) {
                direccionCompleta = DireccionTemporal.DireccionCompleta;
            } else {
                const direccionResult = await pool.request()
                    .input('IdDireccionPer', sql.Int, IdDireccion)
                    .query('SELECT DireccionCompleta FROM DireccionPersona WHERE IdDireccionPer = @IdDireccionPer');
                
                direccionCompleta = direccionResult.recordset[0].DireccionCompleta;
            }

            // Crear Envio
            await pool.request()
                .input('FechaEnvio', sql.DateTime, new Date())
                .input('Ubicacion', sql.NVarChar, direccionCompleta)
                .input('IdPedido', sql.Int, IdPedido)
                .input('EstadoEnvio', sql.Int, 1)
                .query('exec EnvioCrear @FechaEnvio, @Ubicacion, @IdPedido, @EstadoEnvio');
        }

        res.json({ message: 'Pedido y envío creados correctamente', pedido: pedidoResult.recordset });
    } catch (error) {
        console.error("Error al crear pedido:", error);
        res.status(500).send("Error al crear pedido");
    }
};

export const createPedidoFromCita = async (req, res) => {
    const { IdCita } = req.params;

    try {
        const pool = await getConnection();

        // Obtener detalles de la cita incluyendo el ID de la persona dueña
        const citaDetailsResult = await pool.request()
            .input('IdCitaMed', sql.Int, IdCita)
            .query('EXEC CitaMedicaConsulta @IdCitaMed');

        const citaDetails = citaDetailsResult.recordset[0];
        const IdPersona = citaDetails.IdPersona;

        // Obtener productos recetados de la cita
        const productosRecetadosResult = await pool.request()
            .input('IdCita', sql.Int, IdCita)
            .query('EXEC ProductoRecetadoPorCita @IdCita');

        const productosRecetados = productosRecetadosResult.recordset;

        // Crear Cobro
        const cobroResult = await pool.request()
            .input('IdDivisa', sql.Int, 1) // Asumiendo divisa fija
            .input('IdMetPago', sql.Int, 1) // Asumiendo método de pago fijo
            .query('exec CobroCrear @IdDivisa, @IdMetPago');

        const IdCobro = cobroResult.recordset[0].IdCobro;

        // Calcular monto total
        const MontoTotal = productosRecetados.reduce((total, producto) => total + producto.PrecioProducto * producto.cantidad, citaDetails.Precio);

        // Crear Pedido
        const pedidoResult = await pool.request()
            .input('FechaPedido', sql.Date, new Date())
            .input('MontoTotal', sql.Decimal(18, 2), MontoTotal)
            .input('IdPersona', sql.Int, IdPersona)
            .input('IdCobro', sql.Int, IdCobro)
            .input('EstadoPedido', sql.Int, 1)
            .input('Envio', sql.Bit, 0) // Asumiendo sin envío
            .input('CitaMedica', sql.Bit, 1)
            .query('exec PedidoCrear @FechaPedido, @MontoTotal, @IdPersona, @IdCobro, @EstadoPedido, @Envio, @CitaMedica');

        const IdPedido = pedidoResult.recordset[0].IdPedido;

        // Crear Detalles de Pedido
        for (const detalle of productosRecetados) {
            await pool.request()
                .input('Cantidad', sql.Int, detalle.cantidad)
                .input('MontoTotal', sql.Decimal(18, 2), detalle.PrecioProducto * detalle.cantidad)
                .input('IdProducto', sql.Int, detalle.IdProducto)
                .input('IdPedido', sql.Int, IdPedido)
                .query('exec DetallesPedidoCrear @Cantidad, @MontoTotal, @IdProducto, @IdPedido');
        }

        // Actualizar estado de la cita a "Cancelada"
        await pool.request()
            .input('IdCitaMed', sql.Int, IdCita)
            .query('EXEC CitaActualizarEstadoCancelado @IdCitaMed');

        res.json({ message: 'Cobro realizado y pedido creado correctamente' });
    } catch (error) {
        console.error("Error al realizar el cobro y crear el pedido:", error);
        res.status(500).send("Error al realizar el cobro y crear el pedido");
    }
};
