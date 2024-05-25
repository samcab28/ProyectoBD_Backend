import {getConnection} from "../../database/connection.js";

// Contralador para crear DetallePedido
export const createDetallePedido = async (req, res) => {
    try {
        const { Cantidad, MontoTotal, IdProducto, IdPedido } = req.body; // Obtener los datos del cuerpo de la petición
        const pool = await getConnection();
        const result = await pool.request()
            .input('Cantidad', Cantidad)
            .input('MontoTotal', MontoTotal)
            .input('IdProducto', IdProducto)
            .input('IdPedido', IdPedido)
            .query('exec DetallesPedidoCrear @Cantidad, @MontoTotal, @IdProducto, @IdPedido'); // Utilizar una consulta parametrizada
        // Enviar una respuesta con el resultado de la consulta
        res.json({ message: 'DetallePedido creado correctamente' });
    } catch (error) {
        console.error("Error al crear DetallePedido:", error);
        res.status(500).send("Error al crear DetallePedido");
    }
}
