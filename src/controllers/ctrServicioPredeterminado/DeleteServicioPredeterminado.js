import {getConnection} from "../../database/connection.js";

// Controlador para eliminar un ServicioPredeterminado existente por ID
export const deleteServicioPredeterminado = async (req, res) => {
    try {
        const { id } = req.params; // Obtener el ID de los parámetros de la URL
        const pool = await getConnection();
        const result = await pool.request()
            .input('IdServicio', id)
            .query('exec ServicioPredeterminadoEliminar @IdServicio'); // Utilizar una consulta parametrizada

        // Enviar una respuesta con el resultado de la consulta
        res.json({ message: 'ServicioPredeterminado eliminado correctamente' });
    } catch (error) {
        console.error("Error al eliminar ServicioPredeterminado:", error);
        res.status(500).send("Error al eliminar ServicioPredeterminado");
    }
}
