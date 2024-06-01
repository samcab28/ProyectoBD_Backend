import { getConnection } from "../../../database/connection.js";
import sql from 'mssql';

// Controlador para crear Transferencia
export const createTransferencia = async (req, res) => {
    try {
        const { NumComprobante, IdCobro } = req.body; // Obtener los datos del cuerpo de la petición
        const pool = await getConnection();
        const result = await pool.request()
            .input('NumComprobante', sql.VarChar, NumComprobante) // Añadir el parámetro SQL con el tipo correspondiente
            .input('IdCobro', sql.Int, IdCobro) // Añadir el parámetro SQL con el tipo correspondiente
            .query('exec TransferenciaCrear @NumComprobante, @IdCobro'); // Utilizar una consulta parametrizada
        // Enviar una respuesta con el resultado de la consulta
        res.json({ message: 'Transferencia creado correctamente' });
    } catch (error) {
        console.error("Error al crear Transferencia:", error);
        res.status(500).send("Error al crear Transferencia");
    }
}
