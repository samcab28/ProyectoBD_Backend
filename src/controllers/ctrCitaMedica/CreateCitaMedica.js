import {getConnection} from "../../database/connection.js";

// Contralador para crear citas 
export const createCitaMedica = async (req, res) => {
    try {
        const { FechaCita, DuracionCita, IdMascota, IdEncargado, EstadoCita } = req.body; // Obtener los datos del cuerpo de la petición
        const pool = await getConnection();
        const result = await pool.request()
            .input('FechaCita', FechaCita)
            .input('DuracionCita', DuracionCita)
            .input('IdMascota', IdMascota)
            .input('IdEncargado', IdEncargado)
            .input('EstadoCita', EstadoCita)
            .query('exec CitaMedicaCrear @FechaCita, @DuracionCita, @IdMascota, @IdEncargado, @EstadoCita'); // Utilizar una consulta parametrizada
        // Enviar una respuesta con el resultado de la consulta
        res.json({ message: 'Cita médica creada correctamente' });
    } catch (error) {
        console.error("Error al crear cita médica:", error);
        res.status(500).send("Error al crear cita médica");
    }
}