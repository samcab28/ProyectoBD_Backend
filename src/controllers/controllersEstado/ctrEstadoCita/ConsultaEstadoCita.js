import {getConnection} from "../../../database/connection.js";

// Controlador para obtener todas los EstadoCita
export const getEstadoCita = async (req, res) => {
    try {
        const pool = await getConnection();
        const result = await pool.request().query('exec EstadoCitaConsulta');
        // Enviar una respuesta con el resultado de la consulta
        res.send(result.recordset);
    } catch (error) {
        console.error("Error al obtener EstadoCitas:", error);
        res.status(500).send("Error al obtener EstadoCitas");
    }
}

// Controlador para obtener EstadoCita por id
export const getEstadoCitaById = async (req, res) => {
    try {
        const { id } = req.params; // Obtener el ID de los parámetros de la URL
        const pool = await getConnection();
        const result = await pool.request()
            .input('IdEstPed', id)
            .query('exec EstadoCitaConsulta @IdEstPed'); // Utilizar una consulta parametrizada
        // Enviar una respuesta con el resultado de la consulta
        res.send(result.recordset);
    } catch (error) {
        console.error("Error al obtener un solo EstadoCitaConsulta:", error);
        res.status(500).send("Error al obtener un solo EstadoCitaConsulta");
    }
}