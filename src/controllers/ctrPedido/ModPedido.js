import { getConnection } from "../../database/connection.js";
import sql from 'mssql';

// Controlador para modificar un Pedido existente por ID
export const updatePedido = async (req, res) => {
    try {
        const { id } = req.params; // Obtener el ID de los parámetros de la URL
        const { CampoModificar, ValorNuevo } = req.body; // Obtener los datos del cuerpo de la petición

        const pool = await getConnection();
        const result = await pool.request()
            .input('IdPedido', sql.Int, id)
            .input('CampoModificar', sql.NVarChar(128), CampoModificar)
            .input('ValorNuevo', sql.NVarChar(255), ValorNuevo)
            .query('exec PedidoModificar @IdPedido, @CampoModificar, @ValorNuevo'); // Utilizar una consulta parametrizada

        // Enviar una respuesta con el resultado de la consulta
        res.json({ message: 'Pedido modificado correctamente' });
    } catch (error) {
        console.error("Error al modificar pedido:", error);
        res.status(500).send("Error al modificar pedido");
    }
}
