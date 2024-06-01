import {getConnection} from "../../database/connection.js";
import sql from "mssql"; 

// Contralador para crear citas 
export const createCitaMedica = async (req, res) => {
    try {
        const { FechaCita, DuracionCita, IdMascota, IdEncargado, EstadoCita } = req.body; // Obtener los datos del cuerpo de la petición
        const pool = await getConnection();
        const result = await pool.request()
            .input('FechaCita', sql.Date, FechaCita)
            .input('DuracionCita', sql.Int, DuracionCita)
            .input('IdMascota', sql.Int, IdMascota)
            .input('IdEncargado', sql.Int, IdEncargado)
            .input('EstadoCita', sql.Int, EstadoCita)
            .query('exec CitaMedicaCrear @FechaCita, @DuracionCita, @IdMascota, @IdEncargado, @EstadoCita'); // Utilizar una consulta parametrizada
        // Enviar una respuesta con el resultado de la consulta
        res.json({ message: 'Cita médica creada correctamente' });
    } catch (error) {
        console.error("Error al crear cita médica:", error);
        res.status(500).send("Error al crear cita médica");
    }
}