import {getConnection} from "../../database/connection.js";

// Controlador para obtener todas las dirreciones de personas
export const getDireccionPersona = async (req, res) => {
    try {
        const pool = await getConnection();
        const result = await pool.request().query('EXEC DireccionPersonaConsulta;');
        // Enviar una respuesta con el resultado de la consulta
        res.send(result.recordset);
    } catch (error) {
        console.error("Error al obtener direcciones:", error);
        res.status(500).send("Error al obtener direcciones");
    }
}

// Controlador para obtener dirrecion de persona por id dirrecion
export const getDireccionPersonaByIdDir = async (req, res) => {
    try {
        const { id } = req.params; // Obtener el ID de los parámetros de la URL
        const pool = await getConnection();
        const result = await pool.request()
            .input('IdDireccionPer', id)
            .query('EXEC DireccionPersonaConsulta @IdDireccionPer'); // Utilizar una consulta parametrizada
        // Enviar una respuesta con el resultado de la consulta
        res.send(result.recordset);
    } catch (error) {
        console.error("Error al obtener una direccion:", error);
        res.status(500).send("Error al obtener una direccion");
    }
}

// Controlador para obtener las dirreciones de una persona por el id persona 
export const getDireccionPersonaByIdPer = async (req, res) => {
    try {
        const { id } = req.params; // Obtener el ID de los parámetros de la URL
        const pool = await getConnection();
        const result = await pool.request()
            .input('IdPersona', id)
            .query('EXEC DireccionPersonaConsultaByPersona @IdPersona'); // Utilizar una consulta parametrizada
        // Enviar una respuesta con el resultado de la consulta
        res.send(result.recordset);
    } catch (error) {
        console.error("Error al obtener las direcciones:", error);
        res.status(500).send("Error al obtener las direcciones");
    }
}
