import {getConnection} from "../../../database/connection.js";

// Controlador para obtener todas los EstadoPedido
export const getEstadoPedido = async (req, res) => {
    try {
        const pool = await getConnection();
        const result = await pool.request().query('exec EstadoPedidoConsulta');
        // Enviar una respuesta con el resultado de la consulta
        res.send(result.recordset);
    } catch (error) {
        console.error("Error al obtener EstadoPedidos:", error);
        res.status(500).send("Error al obtener EstadoPedidos");
    }
}

// Controlador para obtener EstadoPedido por id
export const getEstadoPedidoById = async (req, res) => {
    try {
        const { id } = req.params; // Obtener el ID de los parámetros de la URL
        const pool = await getConnection();
        const result = await pool.request()
            .input('IdEstPed', id)
            .query('exec EstadoPedidoConsulta @IdEstPed'); // Utilizar una consulta parametrizada
        // Enviar una respuesta con el resultado de la consulta
        res.send(result.recordset);
    } catch (error) {
        console.error("Error al obtener un solo EstadoPedidoConsulta:", error);
        res.status(500).send("Error al obtener un solo EstadoPedidoConsulta");
    }
}