import { getConnection } from "../../database/connection.js";
import sql from 'mssql'; // Importa los parámetros de SQL

// Controlador para crear Expediente
export const createExpediente = async (req, res) => {
    try {
        const { Comentarios, IdCita, veterinario, mascota, ProductosRecetados } = req.body; // Obtener los datos del cuerpo de la petición
        const pool = await getConnection();
        const result = await pool.request()
            .input('Comentarios', sql.NVarChar, Comentarios) // Agrega el tipo de dato
            .input('IdCita', sql.Int, IdCita) // Agrega el tipo de dato
            .input('veterinario', sql.Int, veterinario) // Agrega el tipo de dato
            .input('mascota', sql.Int, mascota) // Agrega el tipo de dato
            .input('ProductosRecetados', sql.Int, ProductosRecetados) // Agrega el tipo de dato
            .query('exec ExpedienteCrear @Comentarios, @IdCita, @veterinario, @mascota, @ProductosRecetados'); // Utilizar una consulta parametrizada
        // Enviar una respuesta con el resultado de la consulta
        res.json({ message: 'Expediente creado correctamente' });
    } catch (error) {
        console.error("Error al crear expediente:", error);
        res.status(500).send("Error al crear expediente");
    }
}