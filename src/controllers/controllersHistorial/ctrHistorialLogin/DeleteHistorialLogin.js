import {getConnection} from "../../../database/connection.js";

// Controlador para borrar un HistorialLogin existente por ID
export const deleteHistorialLogin = async (req, res) => {
    try {
        const { id } = req.params; // Obtener el ID de los parámetros de la URL
        const pool = await getConnection();
        const result = await pool.request()
            .input('IdLogin', id)
            .query('exec HistorialLoginEliminar @IdLogin'); // Utilizar una consulta parametrizada
        // Enviar una respuesta con el resultado de la consulta
        res.json({status: "HistorialLogin eliminado"});
    } catch (error) {
        console.error("Error al eliminar HistorialLogin:", error);
        res.status(500).send("Error al eliminar HistorialLogin");
    }
}