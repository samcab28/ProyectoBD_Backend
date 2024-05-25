import {getConnection} from "../../database/connection.js";

// Contralador para crear Pedido
export const createPedido = async (req, res) => {
    try {
        const { FechaPedido, MontoTotal, IdPersona, IdCobro, EstadoPedido } = req.body; // Obtener los datos del cuerpo de la petición
        const pool = await getConnection();
        const result = await pool.request()
            .input('FechaPedido', FechaPedido)
            .input('MontoTotal', MontoTotal)
            .input('IdPersona', IdPersona)
            .input('IdCobro', IdCobro)
            .input('EstadoPedido', EstadoPedido)
            .query('exec PedidoCrear @FechaPedido, @MontoTotal, @IdPersona, @IdCobro, @EstadoPedido'); // Utilizar una consulta parametrizada
        // Enviar una respuesta con el resultado de la consulta
        res.json({ message: 'Pedido creado correctamente' });
    } catch (error) {
        console.error("Error al crear pedido:", error);
        res.status(500).send("Error al crear pedido");
    }
}
