import {getConnection} from "../../database/connection.js";

// Controlador para obtener todas las Sinpe
export const getSinpe = async (req, res) => {
    try {
        const pool = await getConnection();
        const result = await pool.request().query('exec SinpeConsulta');
        // Enviar una respuesta con el resultado de la consulta
        res.send(result.recordset);
    } catch (error) {
        console.error("Error al obtener Sinpe:", error);
        res.status(500).send("Error al obtener Sinpe");
    }
}

// Controlador para obtener Sinpe por id
export const getSinpeById = async (req, res) => {
    try {
        const { id } = req.params; // Obtener el ID de los parámetros de la URL
        const pool = await getConnection();
        const result = await pool.request()
            .input('IdSinpe', id)
            .query('exec SinpeConsulta @IdSinpe'); // Utilizar una consulta parametrizada
        // Enviar una respuesta con el resultado de la consulta
        res.send(result.recordset);
    } catch (error) {
        console.error("Error al obtener un solo Sinpe:", error);
        res.status(500).send("Error al obtener un solo Sinpe");
    }
}

