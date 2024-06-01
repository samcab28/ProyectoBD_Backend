import {getConnection} from "../../../database/connection.js";

// Controlador para obtener todas las Transferencias
export const getTransferencia = async (req, res) => {
    try {
        const pool = await getConnection();
        const result = await pool.request().query('exec TransferenciaConsulta');
        // Enviar una respuesta con el resultado de la consulta
        res.send(result.recordset);
    } catch (error) {
        console.error("Error al obtener Transferencia:", error);
        res.status(500).send("Error al obtener Transferencia");
    }
}

// Controlador para obtener Transferencia por id
export const getTransferenciaById = async (req, res) => {
    try {
        const { id } = req.params; // Obtener el ID de los parámetros de la URL
        const pool = await getConnection();
        const result = await pool.request()
            .input('IdTransferencia', id)
            .query('exec TransferenciaConsulta @IdTransferencia'); // Utilizar una consulta parametrizada
        // Enviar una respuesta con el resultado de la consulta
        res.send(result.recordset);
    } catch (error) {
        console.error("Error al obtener un solo Transferencia:", error);
        res.status(500).send("Error al obtener un solo Transferencia");
    }
}
