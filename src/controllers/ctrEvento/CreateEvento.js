import {getConnection} from "../../database/connection.js";

// Contralador para crear Evento
export const createEvento = async (req, res) => {
    try {
        const { Evento, IdExpediente } = req.body; // Obtener los datos del cuerpo de la petición
        const pool = await getConnection();
        const result = await pool.request()
            .input('Evento', Evento)
            .input('IdExpediente', IdExpediente)
            .query('exec EventoCrear @Evento, @IdExpediente'); // Utilizar una consulta parametrizada
        // Enviar una respuesta con el resultado de la consulta
        res.json({ message: 'Evento creado correctamente' });
    } catch (error) {
        console.error("Error al crear evento:", error);
        res.status(500).send("Error al crear evento");
    }
}

