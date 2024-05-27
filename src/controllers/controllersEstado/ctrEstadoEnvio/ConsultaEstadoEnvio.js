import {getConnection} from "../../../database/connection.js";

// Controlador para obtener todas los EstadoEnvio
export const getEstadoEnvio = async (req, res) => {
    try {
        const pool = await getConnection();
        const result = await pool.request().query('exec EstadoEnvioConsulta');
        // Enviar una respuesta con el resultado de la consulta
        res.send(result.recordset);
    } catch (error) {
        console.error("Error al obtener EstadoEnvios:", error);
        res.status(500).send("Error al obtener EstadoEnvios");
    }
}

// Controlador para obtener EstadoEnvio por id
export const getEstadoEnvioById = async (req, res) => {
    try {
        const { id } = req.params; // Obtener el ID de los parámetros de la URL
        const pool = await getConnection();
        const result = await pool.request()
            .input('IdEstPed', id)
            .query('exec EstadoEnvioConsulta @IdEstPed'); // Utilizar una consulta parametrizada
        // Enviar una respuesta con el resultado de la consulta
        res.send(result.recordset);
    } catch (error) {
        console.error("Error al obtener un solo EstadoEnvioConsulta:", error);
        res.status(500).send("Error al obtener un solo EstadoEnvioConsulta");
    }
}