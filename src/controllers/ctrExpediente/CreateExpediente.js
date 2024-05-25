import {getConnection} from "../../database/connection.js";

// Contralador para crear Expediente
export const createExpediente = async (req, res) => {
    try {
        const { Comentarios, IdCita, veterinario, mascota, ProductosRecetados } = req.body; // Obtener los datos del cuerpo de la petición
        const pool = await getConnection();
        const result = await pool.request()
            .input('Comentarios', Comentarios)
            .input('IdCita', IdCita)
            .input('veterinario', veterinario)
            .input('mascota', mascota)
            .input('ProductosRecetados', ProductosRecetados)
            .query('exec ExpedienteCrear @Comentarios, @IdCita, @veterinario, @mascota, @ProductosRecetados'); // Utilizar una consulta parametrizada
        // Enviar una respuesta con el resultado de la consulta
        res.json({ message: 'Expediente creado correctamente' });
    } catch (error) {
        console.error("Error al crear expediente:", error);
        res.status(500).send("Error al crear expediente");
    }
}