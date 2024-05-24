import {getConnection} from "../../database/connection.js";

// Controlador para eliminar una URL por ID
export const deleteUrl = async (req, res) => {
    try {
        const { id } = req.params; // Obtener el ID de los parámetros de la URL
        const pool = await getConnection();
        const result = await pool.request()
            .input('id', id)
            .query('exec UrlEliminar @id'); // Utilizar una consulta parametrizada
        // Enviar una respuesta con el resultado de la consulta
        res.send(result);
    } catch (error) {
        console.error("Error al eliminar una URL:", error);
        res.status(500).send("Error al eliminar una URL");
    }
}
