import {getConnection} from "../../database/connection.js";

// Controlador para obtener todas los pedidos
export const getPedido = async (req, res) => {
    try {
        const pool = await getConnection();
        const result = await pool.request().query('exec PedidoConsulta');
        // Enviar una respuesta con el resultado de la consulta
        res.send(result.recordset);
    } catch (error) {
        console.error("Error al obtener pedidos:", error);
        res.status(500).send("Error al obtener pedidos");
    }
}

// Controlador para obtener pedidos por id
export const getPedidoById = async (req, res) => {
    try {
        const { id } = req.params; // Obtener el ID de los parámetros de la URL
        const pool = await getConnection();
        const result = await pool.request()
            .input('IdPedido', id)
            .query('exec PedidoConsulta @IdPedido'); // Utilizar una consulta parametrizada
        // Enviar una respuesta con el resultado de la consulta
        res.send(result.recordset);
    } catch (error) {
        console.error("Error al obtener un solo pedido:", error);
        res.status(500).send("Error al obtener un solo pedido");
    }
}