import {getConnection} from "../../database/connection.js";

// Controlador para obtener todas los eventos
export const getEvento = async (req, res) => {
    try {
        const pool = await getConnection();
        const result = await pool.request().query('exec EventoConsulta');
        // Enviar una respuesta con el resultado de la consulta
        res.send(result.recordset);
    } catch (error) {
        console.error("Error al obtener eventos:", error);
        res.status(500).send("Error al obtener eventos");
    }
}

// Controlador para obtener eventos por id
export const getEventoById = async (req, res) => {
    try {
        const { id } = req.params; // Obtener el ID de los parámetros de la URL
        const pool = await getConnection();
        const result = await pool.request()
            .input('IdEvento', id)
            .query('exec EventoConsulta @IdEvento'); // Utilizar una consulta parametrizada
        // Enviar una respuesta con el resultado de la consulta
        res.send(result.recordset);
    } catch (error) {
        console.error("Error al obtener un solo evento:", error);
        res.status(500).send("Error al obtener un solo evento");
    }
}
