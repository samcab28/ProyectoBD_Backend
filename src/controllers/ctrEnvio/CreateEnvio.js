import { getConnection } from "../../database/connection.js";
import sql from 'mssql';

// Controlador para crear Envio
export const createEnvio = async (req, res) => {
    try {
        const { FechaEnvio, Ubicacion, IdPedido, EstadoEnvio } = req.body; // Obtener los datos del cuerpo de la petición
        const pool = await getConnection();
        const result = await pool.request()
            .input('FechaEnvio', sql.DateTime, FechaEnvio)
            .input('Ubicacion', sql.NVarChar, Ubicacion)
            .input('IdPedido', sql.Int, IdPedido)
            .input('EstadoEnvio', sql.Int, EstadoEnvio)
            .query('exec EnvioCrear @FechaEnvio, @Ubicacion, @IdPedido, @EstadoEnvio'); // Utilizar una consulta parametrizada
        // Enviar una respuesta con el resultado de la consulta
        res.json({ message: 'Envio creado correctamente' });
    } catch (error) {
        console.error("Error al crear Envio:", error);
        res.status(500).send("Error al crear Envio");
    }
}
