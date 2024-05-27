import {getConnection} from "../../database/connection.js";

// Controlador para obtener todas las HistorialLogins
export const getHistorialLogin = async (req, res) => {
    try {
        const pool = await getConnection();
        const result = await pool.request().query('exec HistorialLoginConsulta');
        // Enviar una respuesta con el resultado de la consulta
        res.send(result.recordset);
    } catch (error) {
        console.error("Error al obtener HistorialLogin:", error);
        res.status(500).send("Error al obtener HistorialLogin");
    }
}

// Controlador para obtener HistorialLogin por id
export const getHistorialLoginById = async (req, res) => {
    try {
        const { id } = req.params; // Obtener el ID de los parámetros de la URL
        const pool = await getConnection();
        const result = await pool.request()
            .input('IdLogin', id)
            .query('exec HistorialLoginConsulta @IdLogin'); // Utilizar una consulta parametrizada
        // Enviar una respuesta con el resultado de la consulta
        res.send(result.recordset);
    } catch (error) {
        console.error("Error al obtener un solo HistorialLogin:", error);
        res.status(500).send("Error al obtener un solo HistorialLogin");
    }
}

