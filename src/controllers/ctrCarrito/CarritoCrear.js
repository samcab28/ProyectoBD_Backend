import { getConnection } from "../../database/connection.js";

// Controlador para crear una referencia carrito 
export const createCarrito = async (req, res) => {
    try {
        const { IdPersona, IdProducto, Cantidad } = req.body; // Obtener los datos del cuerpo de la petición
        const pool = await getConnection();
        const result = await pool.request()
            .input('IdPersona', IdPersona)
            .input('IdProducto', IdProducto)
            .input('Cantidad', Cantidad)
            .query('EXEC CarritoCrear @IdPersona, @IdProducto, @Cantidad'); // Utilizar una consulta parametrizada
        // Enviar una respuesta con el resultado de la consulta
        res.json(result.recordset[0]);
    } catch (error) {
        console.error("Error al agregar producto al carrito:", error);
        res.status(500).send("Error al agregar producto al carrito");
    }
}
