import {getConnection} from "../../database/connection.js";

// Controlador para obtener todas las personas
export const getPersona = async (req, res) => {
    try {
        const pool = await getConnection();
        const result = await pool.request().query('exec PersonaConsulta');
        // Enviar una respuesta con el resultado de la consulta
        res.send(result);
    } catch (error) {
        console.error("Error al obtener personas:", error);
        res.status(500).send("Error al obtener personas");
    }
}


// Controlador para obtener una sola persona por ID
export const getPersonaById = async (req, res) => {
    try {
        const { id } = req.params; // Obtener el ID de los parámetros de la URL
        const pool = await getConnection();
        const result = await pool.request()
            .input('id', id)
            .query('exec PersonaConsulta @id'); // Utilizar una consulta parametrizada
        // Enviar una respuesta con el resultado de la consulta
        res.send(result.recordset);
    } catch (error) {
        console.error("Error al obtener una sola persona:", error);
        res.status(500).send("Error al obtener una sola persona");
    }
}
