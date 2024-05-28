import { getConnection } from "../../../database/connection.js";
import sql from 'mssql';

// Controlador para crear Sinpe
export const createSinpe = async (req, res) => {
    try {
        const { NumComprobante, IdCobro } = req.body; // Obtener los datos del cuerpo de la petición
        const pool = await getConnection();
        const result = await pool.request()
            .input('NumComprobante', sql.VarChar, NumComprobante) // Añadir el parámetro SQL con el tipo correspondiente
            .input('IdCobro', sql.Int, IdCobro) // Añadir el parámetro SQL con el tipo correspondiente
            .query('exec SinpeCrear @NumComprobante, @IdCobro'); // Utilizar una consulta parametrizada
        // Enviar una respuesta con el resultado de la consulta
        res.json({ message: 'Sinpe creado correctamente' });
    } catch (error) {
        console.error("Error al crear Sinpe:", error);
        res.status(500).send("Error al crear Sinpe");
    }
}
