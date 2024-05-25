import {getConnection} from "../../database/connection.js";

// Controlador para obtener todas las ProductosRecetados
export const getProductoRecetado = async (req, res) => {
    try {
        const pool = await getConnection();
        const result = await pool.request().query('exec ProductoRecetadoConsulta');
        // Enviar una respuesta con el resultado de la consulta
        res.send(result.recordset);
    } catch (error) {
        console.error("Error al obtener ProductosRecetados:", error);
        res.status(500).send("Error al obtener ProductosRecetados");
    }
}

// Controlador para obtener una ProductoRecetado por ID
export const getProductoRecetadoById = async (req, res) => {
    try {
        const { id } = req.params; // Obtener el ID de los parámetros de la URL
        const pool = await getConnection();
        const result = await pool.request()
            .input('id', id)
            .query('exec ProductoRecetadoConsulta @id'); // Utilizar una consulta parametrizada
        // Enviar una respuesta con el resultado de la consulta
        res.send(result.recordset);
    } catch (error) {
        console.error("Error al obtener una sola ProductoRecetado:", error);
        res.status(500).send("Error al obtener una sola ProductoRecetado");
    }
}
