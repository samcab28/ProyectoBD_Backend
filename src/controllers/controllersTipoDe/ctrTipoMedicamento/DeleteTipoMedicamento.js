import {getConnection} from "../../database/connection.js";

// Controlador para borrar una TipoMedicamento existente por ID
export const deleteTipoMedicamento = async (req, res) => {
    try {
        const { id } = req.params; // Obtener el ID de los parámetros de la URL
        const pool = await getConnection();
        const result = await pool.request()
            .input('id', id)
            .query('exec TipoMedicamentoEliminar @id'); // Utilizar una consulta parametrizada
        // Enviar una respuesta con el resultado de la consulta
        res.send(result.recordset);
    } catch (error) {
        console.error("Error al borrar un solo TipoMedicamento:", error);
        res.status(500).send("Error al borrar un solo TipoMedicamento");
    }
}