import {getConnection} from "../../../database/connection.js";

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



//lista los ultimos logins falsos de ultimos dos minutos
export const getHistorialLoginByHora = async (req, res) => {
    try {
        const { hora } = req.params; // Obtener la hora de los parámetros de la URL
        const pool = await getConnection();
        const result = await pool.request()
            .input('hora_parametro', sql.DateTime, hora) // Ajustar el tipo de dato según el procedimiento almacenado
            .query('EXEC HistorialLoginConteo @hora_parametro'); // Utilizar una consulta parametrizada con el nuevo procedimiento almacenado
        // Enviar una respuesta con el resultado de la consulta
        res.send(result.recordset);
    } catch (error) {
        console.error("Error al obtener los últimos logins falsos:", error);
        res.status(500).send("Error al obtener los últimos logins falsos");
    }
}

