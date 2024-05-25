import {getConnection} from "../../database/connection.js";

// Controlador para borrar un Evento existente por ID
export const deleteEvento = async (req, res) => {
    try {
        const { id } = req.params; // Obtener el ID de los parámetros de la URL
        const pool = await getConnection();
        const result = await pool.request()
            .input('IdEvento', id)
            .query('exec EventoEliminar @IdEvento'); // Utilizar una consulta parametrizada
        // Enviar una respuesta con el resultado de la consulta
        res.json({ message: 'Evento eliminado correctamente' });
    } catch (error) {
        console.error("Error al eliminar evento:", error);
        res.status(500).send("Error al eliminar evento");
    }
}
