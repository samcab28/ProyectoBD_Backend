import { getConnection } from "../../database/connection.js";
import sql from 'mssql';

// Controlador para modificar un DetallePedido existente por ID
export const updateDetallePedido = async (req, res) => {
    try {
        const { id } = req.params; // Obtener el ID de los parámetros de la URL
        const { campoModificar, valorNuevo } = req.body; // Obtener los datos del cuerpo de la petición

        const pool = await getConnection();
        const result = await pool.request()
            .input('IdDetallePed', sql.Int, id)
            .input('CampoModificar', sql.NVarChar(128), campoModificar)
            .input('ValorNuevo', sql.NVarChar(255), valorNuevo)
            .query('exec DetallesPedidoModificar @IdDetallePed, @CampoModificar, @ValorNuevo'); // Utilizar una consulta parametrizada

        // Enviar una respuesta con el resultado de la consulta
        res.json({ message: 'DetallePedido modificado correctamente' });
    } catch (error) {
        console.error("Error al modificar detalle pedido:", error);
        res.status(500).send("Error al modificar detalle pedido");
    }
}
