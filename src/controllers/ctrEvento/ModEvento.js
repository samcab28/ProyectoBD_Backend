import { getConnection } from "../../database/connection.js";
import sql from 'mssql';

// Controlador para modificar una Evento existente por ID
export const updateEvento = async (req, res) => {
    try {
        const { id } = req.params; // Obtener el ID de los parámetros de la URL
        const { campoModificar, valorNuevo } = req.body; // Obtener los datos del cuerpo de la solicitud

        // Validar los datos de la solicitud
        if (!campoModificar || !valorNuevo) {
            return res.status(400).send("Los campos campoModificar y ValorNuevo son obligatorios.");
        }

        // Crear una nueva conexión a la base de datos
        const pool = await getConnection();
        const result = await pool.request()
            .input('IdEvento', id)
            .input('CampoModificar', sql.NVarChar(128), campoModificar)
            .input('ValorNuevo', sql.NVarChar(255), valorNuevo)
            .query('exec EventoModificar @IdEvento, @CampoModificar, @ValorNuevo'); // Utilizar una consulta parametrizada

        // Enviar una respuesta con el resultado de la consulta
        res.json({ message: 'Evento modificado correctamente' });
    } catch (error) {
        console.error("Error al modificar evento:", error);
        res.status(500).send("Error al modificar evento");
    }
}
