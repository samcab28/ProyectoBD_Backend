import {getConnection} from "../../../database/connection.js";

// Controlador para obtener todas las HistorialClicks
export const getHistorialClick = async (req, res) => {
    try {
        const pool = await getConnection();
        const result = await pool.request().query('exec HistorialClicksConsulta');
        // Enviar una respuesta con el resultado de la consulta
        res.send(result.recordset);
    } catch (error) {
        console.error("Error al obtener HistorialClick:", error);
        res.status(500).send("Error al obtener HistorialClick");
    }
}

// Controlador para obtener HistorialClick por id
export const getHistorialClickById = async (req, res) => {
    try {
        const { id } = req.params; // Obtener el ID de los parámetros de la URL
        const pool = await getConnection();
        const result = await pool.request()
            .input('IdClick', id)
            .query('exec HistorialClicksConsulta @IdClick'); // Utilizar una consulta parametrizada
        // Enviar una respuesta con el resultado de la consulta
        res.send(result.recordset);
    } catch (error) {
        console.error("Error al obtener un solo HistorialClick:", error);
        res.status(500).send("Error al obtener un solo HistorialClick");
    }
}

