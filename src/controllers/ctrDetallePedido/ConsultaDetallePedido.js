import {getConnection} from "../../database/connection.js";

// Controlador para obtener todas los DetallePedido
export const getDetallePedido = async (req, res) => {
    try {
        const pool = await getConnection();
        const result = await pool.request().query('exec DetallesPedidoConsulta');
        // Enviar una respuesta con el resultado de la consulta
        res.send(result.recordset);
    } catch (error) {
        console.error("Error al obtener DetallePedido:", error);
        res.status(500).send("Error al obtener DetallePedido");
    }
}

// Controlador para obtener DetallePedido por id
export const getDetallePedidoById = async (req, res) => {
    try {
        const { id } = req.params; // Obtener el ID de los parámetros de la URL
        const pool = await getConnection();
        const result = await pool.request()
            .input('IdDetallePed', id)
            .query('exec DetallesPedidoConsulta @IdDetallePed'); // Utilizar una consulta parametrizada
        // Enviar una respuesta con el resultado de la consulta
        res.send(result.recordset);
    } catch (error) {
        console.error("Error al obtener un solo DetallePedido:", error);
        res.status(500).send("Error al obtener un solo DetallePedido");
    }
}

// Controlador para obtener DetallePedido por id pedido
export const getDetallePedidoByPedido = async (req, res) => {
    try {
        const { id } = req.params; // Obtener el ID de los parámetros de la URL
        const pool = await getConnection();
        const result = await pool.request()
            .input('IdPedido', id)
            .query('exec DetallesPedidoConsultaPorPedido @IdPedido'); // Utilizar una consulta parametrizada
        // Enviar una respuesta con el resultado de la consulta
        res.send(result.recordset);
    } catch (error) {
        console.error("Error al obtener DetallePedido por pedido:", error);
        res.status(500).send("Error al obtener DetallePedido por pedido");
    }
}