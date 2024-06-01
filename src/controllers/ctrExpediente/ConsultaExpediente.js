import {getConnection} from "../../database/connection.js";

// Controlador para obtener todas los expedientes
export const getExpediente = async (req, res) => {
    try {
        const pool = await getConnection();
        const result = await pool.request().query('exec ExpedienteConsulta');
        // Enviar una respuesta con el resultado de la consulta
        res.send(result.recordset);
    } catch (error) {
        console.error("Error al obtener expedientes:", error);
        res.status(500).send("Error al obtener expedientes");
    }
}

// Controlador para obtener expedientes por id
export const getExpedienteById = async (req, res) => {
    try {
        const { id } = req.params; // Obtener el ID de los parámetros de la URL
        const pool = await getConnection();
        const result = await pool.request()
            .input('IdExpediente', id)
            .query('exec ExpedienteConsulta @IdExpediente'); // Utilizar una consulta parametrizada
        // Enviar una respuesta con el resultado de la consulta
        res.send(result.recordset);
    } catch (error) {
        console.error("Error al obtener un solo expediente:", error);
        res.status(500).send("Error al obtener un solo expediente");
    }
}
