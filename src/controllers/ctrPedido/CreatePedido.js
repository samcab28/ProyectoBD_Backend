// src/controllers/ctrPedido/CreatePedido.js
import { getConnection } from "../../database/connection.js";
import sql from "mssql";

// Controlador para crear Cobro, Pedido y DetallesPedido
export const createPedido = async (req, res) => {
    const { IdPersona, MontoTotal, IdMetPago, IdDivisa, IdInformacionTarjeta, NumComprobante, DetallesPedido } = req.body;

    try {
        const pool = await getConnection();

        // Comenzar transacción
        const transaction = new sql.Transaction(pool);
        await transaction.begin();

        // Crear Cobro
        const cobroResult = await transaction.request()
            .input('IdDivisa', sql.Int, IdDivisa)
            .input('IdMetPago', sql.Int, IdMetPago)
            .query('exec CobroCrear @IdDivisa, @IdMetPago');

        const IdCobro = cobroResult.recordset[0].IdCobro;

        // Crear Pedido
        const pedidoResult = await transaction.request()
            .input('FechaPedido', sql.Date, new Date())
            .input('MontoTotal', sql.Decimal(18, 2), MontoTotal)
            .input('IdPersona', sql.Int, IdPersona)
            .input('IdCobro', sql.Int, IdCobro)
            .input('EstadoPedido', sql.Int, 1)
            .query('exec PedidoCrear @FechaPedido, @MontoTotal, @IdPersona, @IdCobro, @EstadoPedido');

        const IdPedido = pedidoResult.recordset[0].IdPedido;

        // Crear DetallesPedido
        for (const detalle of DetallesPedido) {
            await transaction.request()
                .input('Cantidad', sql.Int, detalle.Cantidad)
                .input('MontoTotal', sql.Decimal(18, 2), detalle.MontoTotal)
                .input('IdProducto', sql.Int, detalle.IdProducto)
                .input('IdPedido', sql.Int, IdPedido)
                .query('exec DetallesPedidoCrear @Cantidad, @MontoTotal, @IdProducto, @IdPedido');

            // Actualizar la cantidad en el almacenamiento
            await transaction.request()
                .input('IdProducto', sql.Int, detalle.IdProducto)
                .input('IdSucursal', sql.Int, detalle.IdSucursal) // Asegúrate de que el campo IdSucursal esté disponible en detalle
                .input('NuevaCantidad', sql.Int, detalle.NuevaCantidad)
                .query('exec AlmacenamientoModificarCantPro @IdProducto, @IdSucursal, @NuevaCantidad');
        }

        // Si el método de pago es tarjeta, crear el registro en la tabla Tarjeta
        if (IdMetPago === 3 || IdMetPago === 4) {
            if (IdInformacionTarjeta == null) {
                throw new Error('Debe seleccionar una tarjeta o agregar una nueva.');
            }

            await transaction.request()
                .input('IdInformacionTarjeta', sql.Int, IdInformacionTarjeta)
                .input('IdCobro', sql.Int, IdCobro)
                .query('exec TarjetaCrear @IdInformacionTarjeta, @IdCobro');
        }

        // Si el método de pago es Sinpe, crear el registro en la tabla Sinpe
        if (IdMetPago === 2) {
            if (NumComprobante == null) {
                throw new Error('Debe ingresar un número de comprobante.');
            }

            await transaction.request()
                .input('NumComprobante', sql.VarChar, NumComprobante)
                .input('IdCobro', sql.Int, IdCobro)
                .query('exec SinpeCrear @NumComprobante, @IdCobro');
        }

        // Si el método de pago es Transferencia, crear el registro en la tabla Transferencia
        if (IdMetPago === 5) {
            if (NumComprobante == null) {
                throw new Error('Debe ingresar un número de comprobante.');
            }

            await transaction.request()
                .input('NumComprobante', sql.VarChar, NumComprobante)
                .input('IdCobro', sql.Int, IdCobro)
                .query('exec TransferenciaCrear @NumComprobante, @IdCobro');
        }

        // Si el método de pago es efectivo, crear el registro en la tabla Efectivo
        if (IdMetPago === 1) {
            await transaction.request()
                .input('IdCobro', sql.Int, IdCobro)
                .query('exec EfectivoCrear @IdCobro');
        }

        // Confirmar transacción
        await transaction.commit();
        

        res.json({ message: 'Pedido creado correctamente', IdPedido });
    } catch (error) {
        console.error("Error al crear pedido:", error);
        // Revertir transacción en caso de error
        if (transaction) await transaction.rollback();
        res.status(500).send("Error al crear pedido");
    }
};
