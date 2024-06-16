import { getConnection } from "../../database/connection.js";
import sql from "mssql";

// Controlador para crear citas 
export const createCitaMedica = async (req, res) => {
    try {
        const { FechaCita, DuracionCita, IdMascota, IdEncargado, EstadoCita, Precio } = req.body; // Obtener los datos del cuerpo de la petición
        const pool = await getConnection();
        const result = await pool.request()
            .input('FechaCita', sql.Date, FechaCita)
            .input('DuracionCita', sql.Int, DuracionCita)
            .input('IdMascota', sql.Int, IdMascota)
            .input('IdEncargado', sql.Int, IdEncargado)
            .input('EstadoCita', sql.Int, EstadoCita)
            .input('Precio', sql.Decimal(10, 2), Precio)
            .query('exec CitaMedicaCrear @FechaCita, @DuracionCita, @IdMascota, @IdEncargado, @EstadoCita, @Precio'); // Utilizar una consulta parametrizada
        // Obtener la cita creada de los resultados
        const citaCreada = result.recordset[0];
        // Enviar una respuesta con la cita médica creada
        res.json(citaCreada);
    } catch (error) {
        console.error("Error al crear cita médica:", error);
        res.status(500).send("Error al crear cita médica");
    }
}