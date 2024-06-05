import { getConnection } from "../../database/connection.js";
import sql from "mssql";

// Controlador para crear Cobro, Pedido y DetallePedido
export const createPedido = async (req, res) => {
    const { IdPersona, MontoTotal, IdMetPago, IdDivisa, IdInformacionTarjeta, NumComprobante, DetallesPedido } = req.body;

    try {
        const pool = await getConnection();

        // Crear Cobro
        const cobroResult = await pool.request()
            .input('IdDivisa', sql.Int, IdDivisa)
            .input('IdMetPago', sql.Int, IdMetPago)
            .query('exec CobroCrear @IdDivisa, @IdMetPago');

        const IdCobro = cobroResult.recordset[0]?.IdCobro;
        console.log("Cobro creado, IdCobro:", IdCobro);

        if (!IdCobro) {
            throw new Error("Error al crear cobro");
        }

        // Crear Pedido
        const pedidoResult = await pool.request()
            .input('FechaPedido', sql.Date, new Date())
            .input('MontoTotal', sql.Decimal(18, 2), MontoTotal)
            .input('IdPersona', sql.Int, IdPersona)
            .input('IdCobro', sql.Int, IdCobro)
            .input('EstadoPedido', sql.Int, 1)
            .query('exec PedidoCrear @FechaPedido, @MontoTotal, @IdPersona, @IdCobro, @EstadoPedido');

        const IdPedido = pedidoResult.recordset[0]?.IdPedido;
        console.log("Pedido creado, IdPedido:", IdPedido);

        if (!IdPedido) {
            throw new Error("Error al crear pedido");
        }

        // Crear Detalles del Pedido
        for (const detalle of DetallesPedido) {
            console.log("Creando detalle:", detalle);
            await pool.request()
                .input('Cantidad', sql.Int, detalle.Cantidad)
                .input('MontoTotal', sql.Decimal, detalle.MontoTotal)
                .input('IdProducto', sql.Int, detalle.IdProducto)
                .input('IdPedido', sql.Int, IdPedido)
                .query('exec DetallesPedidoCrear @Cantidad, @MontoTotal, @IdProducto, @IdPedido');
            console.log("Detalle creado para IdProducto:", detalle.IdProducto);
        }

        // Si el método de pago es tarjeta, crear el registro en la tabla Tarjeta
        if (IdMetPago === 3 || IdMetPago === 4) {
            if (IdInformacionTarjeta == null) {
                return res.status(400).json({ message: 'Debe seleccionar una tarjeta o agregar una nueva.' });
            }

            await pool.request()
                .input('IdInformacionTarjeta', sql.Int, IdInformacionTarjeta)
                .input('IdCobro', sql.Int, IdCobro)
                .query('exec TarjetaCrear @IdInformacionTarjeta, @IdCobro');
            console.log("Tarjeta creada para IdInformacionTarjeta:", IdInformacionTarjeta);
        }

        // Si el método de pago es Sinpe, crear el registro en la tabla Sinpe
        if (IdMetPago === 2) {
            if (NumComprobante == null) {
                return res.status(400).json({ message: 'Debe ingresar un número de comprobante.' });
            }

            await pool.request()
                .input('NumComprobante', sql.VarChar, NumComprobante)
                .input('IdCobro', sql.Int, IdCobro)
                .query('exec SinpeCrear @NumComprobante, @IdCobro');
            console.log("Sinpe creado para NumComprobante:", NumComprobante);
        }

        // Si el método de pago es Transferencia, crear el registro en la tabla Transferencia
        if (IdMetPago === 5) {
            if (NumComprobante == null) {
                return res.status(400).json({ message: 'Debe ingresar un número de comprobante.' });
            }

            await pool.request()
                .input('NumComprobante', sql.VarChar, NumComprobante)
                .input('IdCobro', sql.Int, IdCobro)
                .query('exec TransferenciaCrear @NumComprobante, @IdCobro');
            console.log("Transferencia creada para NumComprobante:", NumComprobante);
        }

        // Si el método de pago es efectivo, crear el registro en la tabla Efectivo
        if (IdMetPago === 1) {
            await pool.request()
                .input('IdCobro', sql.Int, IdCobro)
                .query('exec EfectivoCrear @IdCobro');
            console.log("Efectivo creado para IdCobro:", IdCobro);
        }

        res.json({ message: 'Pedido creado correctamente', pedido: pedidoResult.recordset });
    } catch (error) {
        console.error("Error al crear pedido:", error);
        res.status(500).json({ message: "Error al crear pedido", error: error.message });
    }
};
