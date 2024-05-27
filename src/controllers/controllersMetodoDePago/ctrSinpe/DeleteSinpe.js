import {getConnection} from "../../database/connection.js";

// Controlador para borrar un Sinpe existente por ID
export const deleteSinpe = async (req, res) => {
    try {
        const { id } = req.params; // Obtener el ID de los parámetros de la URL
        const pool = await getConnection();
        const result = await pool.request()
            .input('IdSinpe', id)
            .query('exec SinpeEliminar @IdSinpe'); // Utilizar una consulta parametrizada
        // Enviar una respuesta con el resultado de la consulta
        res.json({ message: 'Sinpe eliminado correctamente' });
    } catch (error) {
        console.error("Error al eliminar Sinpe:", error);
        res.status(500).send("Error al eliminar Sinpe");
    }
}
