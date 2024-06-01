import {getConnection} from "../../database/connection.js";

// Controlador para obtener todas las divisas
export const getDivisa = async (req, res) => {
    try {
        const pool = await getConnection();
        const result = await pool.request().query('exec DivisaConsulta');
        // Enviar una respuesta con el resultado de la consulta
        res.send(result.recordset);
    } catch (error) {
        console.error("Error al obtener divisas:", error);
        res.status(500).send("Error al obtener divisas");
    }
}

// Controlador para obtener divisas por id
export const getDivisaById = async (req, res) => {
    try {
        const { id } = req.params; // Obtener el ID de los parámetros de la URL
        const pool = await getConnection();
        const result = await pool.request()
            .input('IdDivisa', id)
            .query('exec DivisaConsulta @IdDivisa'); // Utilizar una consulta parametrizada
        // Enviar una respuesta con el resultado de la consulta
        res.send(result.recordset);
    } catch (error) {
        console.error("Error al obtener una sola divisa:", error);
        res.status(500).send("Error al obtener una sola divisa");
    }
}

