import {getConnection} from "../../../database/connection.js";

// Controlador para obtener todas los TipoProducto
export const getTipoProducto= async (req, res) => {
    try {
        const pool = await getConnection();
        const result = await pool.request().query('exec TipoProductoConsulta');
        // Enviar una respuesta con el resultado de la consulta
        res.send(result.recordset);
    } catch (error) {
        console.error("Error al obtener TipoProducto:", error);
        res.status(500).send("Error al obtener TipoProducto");
    }
}

// Controlador para obtener TipoProductopor id
export const getTipoProductoById = async (req, res) => {
    try {
        const { id } = req.params; // Obtener el ID de los parámetros de la URL
        const pool = await getConnection();
        const result = await pool.request()
            .input('IdTipoProducto', id)
            .query('exec TipoProductoConsulta @IdTipoProducto'); // Utilizar una consulta parametrizada
        // Enviar una respuesta con el resultado de la consulta
        res.send(result.recordset);
    } catch (error) {
        console.error("Error al obtener un solo TipoProducto:", error);
        res.status(500).send("Error al obtener un solo TipoProducto");
    }
}