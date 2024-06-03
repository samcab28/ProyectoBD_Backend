import {getConnection} from "../../database/connection.js";

// Controlador para eliminar un registro de almacenamiento
export const deleteAlmacenamiento = async (req, res) => {
    try {
        const { id } = req.params; // Obtener el ID de los parámetros de la URL
        const pool = await getConnection();
        const result = await pool.request()
            .input('IdAlmacenamiento', id)
            .query('exec AlmacenamientoEliminar @IdAlmacenamiento'); // Utilizar una consulta parametrizada
        // Enviar una respuesta con el resultado de la consulta
        res.send(result);
    } catch (error) {
        console.error("Error al eliminar un registro de almacenamiento:", error);
        res.status(500).send("Error al eliminar un registro de almacenamiento");
    }
}
