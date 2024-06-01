import {getConnection} from "../../database/connection.js";

// Controlador para eliminar un DetallePedido existente por ID
export const deleteDetallePedido = async (req, res) => {
    try {
        const { id } = req.params; // Obtener el ID de los parámetros de la URL
        const pool = await getConnection();
        const result = await pool.request()
            .input('IdDetallePed', id)
            .query('exec DetallesPedidoEliminar @IdDetallePed'); // Utilizar una consulta parametrizada
        // Enviar una respuesta con el resultado de la consulta
        res.send(result.recordset);
    } catch (error) {
        console.error("Error al borrar un DetallePedido:", error);
        res.status(500).send("Error al borrar un DetallePedido");
    }
}
