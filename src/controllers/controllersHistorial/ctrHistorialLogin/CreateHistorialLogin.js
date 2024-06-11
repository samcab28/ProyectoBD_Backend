import { getConnection } from "../../../database/connection.js";
import sql from 'mssql';

// Controlador para crear HistorialLogin
export const createHistorialLogin = async (req, res) => {
    try {
        const { username, passwordUser, hora, acceso } = req.body; // Obtener los datos del cuerpo de la petición
        const pool = await getConnection();
        const result = await pool.request()
            .input('username', sql.NVarChar(64), username) // Ajustar el tipo de dato según el procedimiento almacenado
            .input('passwordUser', sql.NVarChar(128), passwordUser) // Ajustar el tipo de dato según el procedimiento almacenado
            .input('hora', sql.DateTime, hora) // Ajustar el tipo de dato según el procedimiento almacenado
            .input('acceso', sql.Bit, acceso) // Ajustar el tipo de dato según el procedimiento almacenado
            .query('exec HistorialLoginCrear @username, @passwordUser, @hora, @acceso'); // Utilizar una consulta parametrizada
        // Enviar una respuesta con el resultado de la consulta
        res.json({status: "HistorialLogin creado"});
    } catch (error) {
        console.error("Error al crear HistorialLogin:", error);
        res.status(500).send("Error al crear HistorialLogin");
    }
}
