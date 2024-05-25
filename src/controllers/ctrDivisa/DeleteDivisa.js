import {getConnection} from "../../database/connection.js";

// Controlador para eliminar una Divisa existente por ID
export const deleteDivisa = async (req, res) => {
    try {
        const { id } = req.params; // Obtener el ID de los parámetros de la URL
        const pool = await getConnection();
        const result = await pool.request()
            .input('IdDivisa', id)
            .query('exec DivisaEliminar @IdDivisa'); // Utilizar una consulta parametrizada
        // Enviar una respuesta con el resultado de la consulta
        res.send(result.recordset);
    } catch (error) {
        console.error("Error al borrar una divisa:", error);
        res.status(500).send("Error al borrar una divisa");
    }
}