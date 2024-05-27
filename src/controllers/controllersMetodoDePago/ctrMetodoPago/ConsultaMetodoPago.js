import {getConnection} from "../../../database/connection.js";

// Controlador para obtener todas los MetodoPago
export const getMetodoPago = async (req, res) => {
    try {
        const pool = await getConnection();
        const result = await pool.request().query('exec MetodoPagoConsulta');
        // Enviar una respuesta con el resultado de la consulta
        res.send(result.recordset);
    } catch (error) {
        console.error("Error al obtener MetodoPago:", error);
        res.status(500).send("Error al obtener MetodoPago");
    }
}

// Controlador para obtener MetodoPago por id
export const getMetodoPagoById = async (req, res) => {
    try {
        const { id } = req.params; // Obtener el ID de los parámetros de la URL
        const pool = await getConnection();
        const result = await pool.request()
            .input('IdMetPago', id)
            .query('exec MetodoPagoConsulta @IdMetPago'); // Utilizar una consulta parametrizada
        // Enviar una respuesta con el resultado de la consulta
        res.send(result.recordset);
    } catch (error) {
        console.error("Error al obtener un solo MetodoPago:", error);
        res.status(500).send("Error al obtener un solo MetodoPago");
    }
}

