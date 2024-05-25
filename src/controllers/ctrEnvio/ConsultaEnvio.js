import {getConnection} from "../../database/connection.js";

// Controlador para obtener todas los Envio
export const getEnvio = async (req, res) => {
    try {
        const pool = await getConnection();
        const result = await pool.request().query('exec EnvioConsulta');
        // Enviar una respuesta con el resultado de la consulta
        res.send(result.recordset);
    } catch (error) {
        console.error("Error al obtener Envio:", error);
        res.status(500).send("Error al obtener Envio");
    }
}

// Controlador para obtener Envio por id
export const getEnvioById = async (req, res) => {
    try {
        const { id } = req.params; // Obtener el ID de los parámetros de la URL
        const pool = await getConnection();
        const result = await pool.request()
            .input('IdEnvio', id)
            .query('exec EnvioConsulta @IdEnvio'); // Utilizar una consulta parametrizada
        // Enviar una respuesta con el resultado de la consulta
        res.send(result.recordset);
    } catch (error) {
        console.error("Error al obtener un solo Envio:", error);
        res.status(500).send("Error al obtener un solo Envio");
    }
}