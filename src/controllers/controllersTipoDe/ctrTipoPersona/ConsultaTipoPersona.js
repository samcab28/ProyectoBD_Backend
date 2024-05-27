import {getConnection} from "../../database/connection.js";

// Controlador para obtener todas los TipoPersona
export const getTipoPersona = async (req, res) => {
    try {
        const pool = await getConnection();
        const result = await pool.request().query('exec TipoPersonaConsulta');
        // Enviar una respuesta con el resultado de la consulta
        res.send(result.recordset);
    } catch (error) {
        console.error("Error al obtener TipoPersonas:", error);
        res.status(500).send("Error al obtener TipoPersonas");
    }
}

// Controlador para obtener sexo por id
export const getTipoPersonaById = async (req, res) => {
    try {
        const { id } = req.params; // Obtener el ID de los parámetros de la URL
        const pool = await getConnection();
        const result = await pool.request()
            .input('IdTipoPer', id)
            .query('exec TipoPersonaConsulta @IdTipoPer'); // Utilizar una consulta parametrizada
        // Enviar una respuesta con el resultado de la consulta
        res.send(result.recordset);
    } catch (error) {
        console.error("Error al obtener un solo TipoPersona:", error);
        res.status(500).send("Error al obtener un solo TipoPersona");
    }
}