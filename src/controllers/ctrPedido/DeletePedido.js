import {getConnection} from "../../database/connection.js";

// Controlador para eliminar un Pedido existente por ID
export const deletePedido = async (req, res) => {
    try {
        const { id } = req.params; // Obtener el ID de los parámetros de la URL
        const pool = await getConnection();
        const result = await pool.request()
            .input('IdPedido', id)
            .query('exec PedidoEliminar @IdPedido'); // Utilizar una consulta parametrizada
        // Enviar una respuesta con el resultado de la consulta
        res.json({ message: 'Pedido eliminado correctamente' });
    } catch (error) {
        console.error("Error al eliminar pedido:", error);
        res.status(500).send("Error al eliminar pedido");
    }
}
