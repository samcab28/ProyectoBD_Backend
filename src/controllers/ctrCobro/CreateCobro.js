import { getConnection } from "../../database/connection.js";
import sql from 'mssql';

// Controlador para crear un cobro
export const createCobro = async (req, res) => {
    try {
        const { IdDivisa, IdMetPago } = req.body; // Obtener los datos del cuerpo de la petición
        const pool = await getConnection();
        const result = await pool.request()
            .input('IdDivisa', sql.Int, IdDivisa)
            .input('IdMetPago', sql.Int, IdMetPago)
            .query('exec CobroCrear @IdDivisa, @IdMetPago'); // Utilizar una consulta parametrizada
        // Enviar una respuesta con el resultado de la consulta
        res.json({ message: 'Cobro creado correctamente' });
    } catch (error) {
        console.error("Error al crear cobro:", error);
        res.status(500).send("Error al crear cobro");
    }
}
