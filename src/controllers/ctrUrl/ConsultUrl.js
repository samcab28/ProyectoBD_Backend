import {getConnection} from "../../database/connection.js";

// Controlador para obtener todas las urls
export const getUrl = async (req, res) => {
    try {
        const pool = await getConnection();
        const result = await pool.request().query('exec UrlConsulta');
        // Enviar una respuesta con el resultado de la consulta
        res.send(result);
    } catch (error) {
        console.error("Error al obtener urls:", error);
        res.status(500).send("Error al obtener urls");
    }
}

// Controlador para obtener una URL por ID
export const getUrlById = async (req, res) => {
    try {
        const { id } = req.params; // Obtener el ID de los parámetros de la URL
        const pool = await getConnection();
        const result = await pool.request()
            .input('id', id)
            .query('exec UrlConsulta @id'); // Utilizar una consulta parametrizada
        // Enviar una respuesta con el resultado de la consulta
        res.send(result.recordset);
    } catch (error) {
        console.error("Error al obtener una sola URL:", error);
        res.status(500).send("Error al obtener una sola URL");
    }
}

