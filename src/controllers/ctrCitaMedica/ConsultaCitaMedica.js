import {getConnection} from "../../database/connection.js";

// Controlador para obtener todas las citas
export const getCitaMedica = async (req, res) => {
    try {
        const pool = await getConnection();
        const result = await pool.request().query('exec CitaMedicaConsulta');
        // Enviar una respuesta con el resultado de la consulta
        res.send(result.recordset);
    } catch (error) {
        console.error("Error al obtener citas:", error);
        res.status(500).send("Error al obtener citas");
    }
}


// Controlador para obtener una cita por ID
export const getCitaMedicaById = async (req, res) => {
    try {
        const { id } = req.params; // Obtener el ID de los parámetros de la URL
        const pool = await getConnection();
        const result = await pool.request()
            .input('id', id)
            .query('exec CitaMedicaConsulta @id'); // Utilizar una consulta parametrizada
        // Enviar una respuesta con el resultado de la consulta
        res.send(result.recordset);
    } catch (error) {
        console.error("Error al obtener una sola cita:", error);
        res.status(500).send("Error al obtener una sola cita");
    }
}
