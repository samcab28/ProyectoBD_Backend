import { getConnection } from "../../../database/connection.js";
import sql from 'mssql';

// Controlador para crear HistorialLogin
export const createHistorialLogin = async (req, res) => {
    try {
        const { estado, IdPersona } = req.body; // Obtener los datos del cuerpo de la petición
        const pool = await getConnection();
        const result = await pool.request()
            .input('estado', sql.Bit, estado) // Ajustar el tipo de dato según el procedimiento almacenado
            .input('IdPersona', sql.Int, IdPersona) // Ajustar el tipo de dato según el procedimiento almacenado
            .query('exec HistorialLoginCrear @estado, @IdPersona'); // Utilizar una consulta parametrizada
        // Enviar una respuesta con el resultado de la consulta
        res.json({status: "HistorialLogin creado"});
    } catch (error) {
        console.error("Error al crear HistorialLogin:", error);
        res.status(500).send("Error al crear HistorialLogin");
    }
}
