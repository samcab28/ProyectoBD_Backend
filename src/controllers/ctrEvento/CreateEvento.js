import { getConnection } from "../../database/connection.js";
import sql from 'mssql'; // Importa los parámetros de SQL

// Controlador para crear Evento
export const createEvento = async (req, res) => {
    try {
        const { Evento, IdExpediente } = req.body; // Obtener los datos del cuerpo de la petición
        const pool = await getConnection();
        const result = await pool.request()
            .input('Evento', sql.NVarChar, Evento) // Agrega el tipo de dato
            .input('IdExpediente', sql.Int, IdExpediente) // Agrega el tipo de dato
            .query('exec EventoCrear @Evento, @IdExpediente'); // Utilizar una consulta parametrizada
        // Enviar una respuesta con el resultado de la consulta
        res.json({ message: 'Evento creado correctamente' });
    } catch (error) {
        console.error("Error al crear evento:", error);
        res.status(500).send("Error al crear evento");
    }
}


