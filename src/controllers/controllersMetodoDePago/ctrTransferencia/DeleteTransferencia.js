import {getConnection} from "../../database/connection.js";

// Controlador para borrar un Transferencia existente por ID
export const deleteTransferencia = async (req, res) => {
    try {
        const { id } = req.params; // Obtener el ID de los parámetros de la URL
        const pool = await getConnection();
        const result = await pool.request()
            .input('IdTransferencia', id)
            .query('exec TransferenciaEliminar @IdTransferencia'); // Utilizar una consulta parametrizada
        // Enviar una respuesta con el resultado de la consulta
        res.json({ message: 'Transferencia eliminado correctamente' });
    } catch (error) {
        console.error("Error al eliminar Transferencia:", error);
        res.status(500).send("Error al eliminar Transferencia");
    }
}
