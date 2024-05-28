import { getConnection } from "../../../database/connection.js";
import sql from 'mssql';

// Controlador para modificar un HistorialPreferencia existente por ID
export const updateHistorialPreferencia = async (req, res) => {
    try {
        const { id } = req.params; // Obtener el ID de los parámetros de la URL
        const { campoModificar, valorNuevo } = req.body; // Obtener los datos del cuerpo de la petición

        const pool = await getConnection();
        const result = await pool.request()
            .input('IdPreferencia', sql.Int, id)
            .input('CampoModificar', sql.NVarChar(128), campoModificar)
            .input('ValorNuevo', sql.NVarChar(255), valorNuevo)
            .query('exec PreferenciasUsuarioModificar @IdPreferencia, @CampoModificar, @ValorNuevo'); // Utilizar una consulta parametrizada

        // Enviar una respuesta con el resultado de la consulta
        res.json({ message: 'HistorialPreferencia modificado correctamente' });
    } catch (error) {
        console.error("Error al modificar HistorialPreferencia:", error);
        res.status(500).send("Error al modificar HistorialPreferencia");
    }
}