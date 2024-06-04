import { getConnection } from "../../database/connection.js";
import sql from 'mssql';

// Controlador para crear una dirección
export const createDireccion = async (req, res) => {
    try {
        const { IdPersona, DireccionCompleta, CodigoPostal } = req.body; // Obtener los datos del cuerpo de la petición
        const pool = await getConnection();
        const result = await pool.request()
            .input('IdPersona', sql.Int, IdPersona)
            .input('DireccionCompleta', sql.NVarChar(512), DireccionCompleta)
            .input('CodigoPostal', sql.NVarChar(64), CodigoPostal)
            .query('exec DireccionPersonaCrear @IdPersona, @DireccionCompleta, @CodigoPostal'); // Utilizar una consulta parametrizada
        // Enviar una respuesta con el resultado de la consulta
        res.json({ message: 'Dirección creada correctamente' });
    } catch (error) {
        console.error("Error al crear dirección:", error);
        res.status(500).send("Error al crear dirección");
    }
}
