import {getConnection} from "../../database/connection.js";
import sql from 'mssql'; // Importa los parámetros de SQL

// Controlador para obtener todas los expedientes
export const getExpediente = async (req, res) => {
    try {
        const pool = await getConnection();
        const result = await pool.request().query('exec ExpedienteConsulta');
        // Enviar una respuesta con el resultado de la consulta
        res.send(result.recordset);
    } catch (error) {
        console.error("Error al obtener expedientes:", error);
        res.status(500).send("Error al obtener expedientes");
    }
}

// Controlador para obtener expedientes por id
export const getExpedienteById = async (req, res) => {
    try {
        const { id } = req.params; // Obtener el ID de los parámetros de la URL
        const pool = await getConnection();
        const result = await pool.request()
            .input('IdExpediente', id)
            .query('exec ExpedienteConsulta @IdExpediente'); // Utilizar una consulta parametrizada
        // Enviar una respuesta con el resultado de la consulta
        res.send(result.recordset);
    } catch (error) {
        console.error("Error al obtener un solo expediente:", error);
        res.status(500).send("Error al obtener un solo expediente");
    }
}


//consultar expedientes segun la mascota
export const getExpedienteByMascota = async (req, res) => {
    try {
        const { id } = req.params; // Obtener el ID de los parámetros de la URL
        const pool = await getConnection();
        const result = await pool.request()
            .input('IdExpediente', id)
            .query('exec ExpedienteConsultaByMascota @IdExpediente'); // Utilizar una consulta parametrizada
        // Enviar una respuesta con el resultado de la consulta
        res.send(result.recordset);
    } catch (error) {
        console.error("Error al obtener un solo expediente:", error);
        res.status(500).send("Error al obtener un solo expediente");
    }
}

//consultar expedientes segun el duegno
export const getExpedienteByDuegno = async (req, res) => {
    try {
        const { id } = req.params; // Obtener el ID de los parámetros de la URL
        const pool = await getConnection();
        const result = await pool.request()
            .input('IdExpediente', id)
            .query('exec expedienteConsultaByDuegno @IdExpediente'); // Utilizar una consulta parametrizada
        // Enviar una respuesta con el resultado de la consulta
        res.send(result.recordset);
    } catch (error) {
        console.error("Error al obtener un solo expediente:", error);
        res.status(500).send("Error al obtener un solo expediente");
    }
}

// Controlador para obtener expedientes por id de mascota
export const getExpedientePorMascota = async (req, res) => {
    const { idMascota } = req.params;

    try {
        const pool = await getConnection();

        const result = await pool.request()
            .input('IdMascota', sql.Int, idMascota)
            .query('EXEC ExpedientePorMascota @IdMascota');

        res.json(result.recordset);
    } catch (error) {
        console.error("Error al obtener el expediente de la mascota:", error);
        res.status(500).send("Error al obtener el expediente de la mascota");
    }
};
