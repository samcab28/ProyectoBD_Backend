import {getConnection} from "../../../database/connection.js";

// Controlador para eliminar un HistorialPreferencia existente por ID
export const deleteHistorialPreferencia = async (req, res) => {
    try {
        const { id } = req.params; // Obtener el ID de los parámetros de la URL
        const pool = await getConnection();
        const result = await pool.request()
            .input('IdPreferencia', id)
            .query('exec PreferenciasUsuarioEliminar @IdPreferencia'); // Utilizar una consulta parametrizada

        // Enviar una respuesta con el resultado de la consulta
        res.json({ message: 'HistorialPreferencia eliminado correctamente' });
    } catch (error) {
        console.error("Error al eliminar HistorialPreferencia:", error);
        res.status(500).send("Error al eliminar HistorialPreferencia");
    }
}
