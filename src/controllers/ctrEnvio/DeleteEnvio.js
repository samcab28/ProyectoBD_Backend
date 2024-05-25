import {getConnection} from "../../database/connection.js";

// Controlador para Eliminar un Envio existente por ID
export const deleteEnvio = async (req, res) => {
    try {
        const { id } = req.params; // Obtener el ID de los parámetros de la URL
        const pool = await getConnection();
        const result = await pool.request()
            .input('IdEnvio', id)
            .query('exec EnvioEliminar @IdEnvio'); // Utilizar una consulta parametrizada
        // Enviar una respuesta con el resultado de la consulta
        res.json({ message: 'Envio eliminado correctamente' });
    } catch (error) {
        console.error("Error al eliminar Envio:", error);
        res.status(500).send("Error al eliminar Envio");
    }
}