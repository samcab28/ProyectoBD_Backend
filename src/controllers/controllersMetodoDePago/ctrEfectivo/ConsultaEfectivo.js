import {getConnection} from "../../../database/connection.js";

// Controlador para obtener todas las Efectivo
export const getEfectivo = async (req, res) => {
    try {
        const pool = await getConnection();
        const result = await pool.request().query('exec EfectivoConsulta');
        // Enviar una respuesta con el resultado de la consulta
        res.send(result.recordset);
    } catch (error) {
        console.error("Error al obtener Efectivo:", error);
        res.status(500).send("Error al obtener Efectivo");
    }
}

// Controlador para obtener Efectivo por id
export const getEfectivoById = async (req, res) => {
    try {
        const { id } = req.params; // Obtener el ID de los parámetros de la URL
        const pool = await getConnection();
        const result = await pool.request()
            .input('IdEfectivo', id)
            .query('exec EfectivoConsulta @IdEfectivo'); // Utilizar una consulta parametrizada
        // Enviar una respuesta con el resultado de la consulta
        res.send(result.recordset);
    } catch (error) {
        console.error("Error al obtener un solo Efectivo:", error);
        res.status(500).send("Error al obtener un solo Efectivo");
    }
}

