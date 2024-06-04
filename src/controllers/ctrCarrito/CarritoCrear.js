import { getConnection } from "../../database/connection.js";

// Controlador para crear una referencia carrito 
export const createCarrito = async (req, res) => {
    try {
        const { IdPersona, IdProducto, IdSucursal, Cantidad } = req.body;
        const pool = await getConnection();
        const result = await pool.request()
            .input('IdPersona', IdPersona)
            .input('IdProducto', IdProducto)
            .input('IdSucursal', IdSucursal)
            .input('Cantidad', 1)
            .query('exec CarritoCrear @IdPersona, @IdProducto, @IdSucursal, @Cantidad');
        res.send(result.recordset[0]);
    } catch (error) {
        console.error("Error al agregar producto al carrito:", error);
        res.status(500).send("Error al agregar producto al carrito");
    }
}
