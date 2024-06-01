import {getConnection} from "../../database/connection.js";

// Controlador para obtener todas las cobros
export const getCobro = async (req, res) => {
    try {
        const pool = await getConnection();
        const result = await pool.request().query('exec CobroConsulta');
        // Enviar una respuesta con el resultado de la consulta
        res.send(result.recordset);
    } catch (error) {
        console.error("Error al obtener cobros:", error);
        res.status(500).send("Error al obtener cobros");
    }
}

// Controlador para obtener cobro por id
export const getCobroById = async (req, res) => {
    try {
        const { id } = req.params; // Obtener el ID de los parámetros de la URL
        const pool = await getConnection();
        const result = await pool.request()
            .input('IdCobro', id)
            .query('exec CobroConsulta @IdCobro'); // Utilizar una consulta parametrizada
        // Enviar una respuesta con el resultado de la consulta
        res.send(result.recordset);
    } catch (error) {
        console.error("Error al obtener un cobro:", error);
        res.status(500).send("Error al obtener un cobro");
    }
}
