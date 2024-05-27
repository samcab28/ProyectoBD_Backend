import {getConnection} from "../../../database/connection.js";

// Controlador para borrar un Efectivo existente por ID
export const deleteEfectivo = async (req, res) => {
    try {
        const { id } = req.params; // Obtener el ID de los parámetros de la URL
        const pool = await getConnection();
        const result = await pool.request()
            .input('IdEfectivo', id)
            .query('exec EfectivoEliminar @IdEfectivo'); // Utilizar una consulta parametrizada
        // Enviar una respuesta con el resultado de la consulta
        res.json({ message: 'Efectivo eliminado correctamente' });
    } catch (error) {
        console.error("Error al eliminar Efectivo:", error);
        res.status(500).send("Error al eliminar Efectivo");
    }
}
