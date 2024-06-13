import { getConnection } from '../../../database/connection.js';
import sql from 'mssql';

// Controlador para crear HistorialClick
export const createHistorialClick = async (req, res) => {
    try {
        const { fechaClick, IdPersona, Accion, Detalle } = req.body; // Obtener los datos del cuerpo de la petición
        const pool = await getConnection();
        const result = await pool.request()
            .input('fechaClick', sql.DateTime, fechaClick) // Ajustar el tipo de dato según la base de datos
            .input('IdPersona', sql.Int, IdPersona) // Ajustar el tipo de dato según la base de datos
            .input('Accion', sql.NVarChar(50), Accion) // Ajustar el tipo de dato según la base de datos
            .input('Detalle', sql.NVarChar(256), Detalle) // Ajustar el tipo de dato según la base de datos
            .query('exec HistorialClicksCrear @fechaClick, @IdPersona, @Accion, @Detalle'); // Utilizar una consulta parametrizada
        // Enviar una respuesta con el resultado de la consulta
        res.json({ status: "HistorialClick creado" });
    } catch (error) {
        console.error("Error al crear HistorialClick:", error);
        res.status(500).send("Error al crear HistorialClick");
    }
}
