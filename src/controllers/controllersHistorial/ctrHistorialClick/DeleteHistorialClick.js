import {getConnection} from "../../database/connection.js";

// Controlador para borrar un HistorialClick existente por ID
export const deleteHistorialClick = async (req, res) => {
    try {
        const { id } = req.params; // Obtener el ID de los parámetros de la URL
        const pool = await getConnection();
        const result = await pool.request()
            .input('IdClick', id)
            .query('exec HistorialClicksEliminar @IdClick'); // Utilizar una consulta parametrizada
        // Enviar una respuesta con el resultado de la consulta
        res.json({status: "HistorialClick eliminado"});
    } catch (error) {
        console.error("Error al eliminar HistorialClick:", error);
        res.status(500).send("Error al eliminar HistorialClick");
    }
}