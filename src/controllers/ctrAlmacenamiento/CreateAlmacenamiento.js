import {getConnection} from "../../database/connection.js";

// Controlador para crear un nuevo registro de almacenamiento
export const createAlmacenamiento = async (req, res) => {
    try {
        const {IdProducto, IdSucursal, Cantidad } = req.body;

        const pool = await getConnection();
        const result = await pool.request()
            .input('IdProducto', IdProducto)
            .input('IdSucursal', IdSucursal)
            .input('Cantidad', Cantidad)
            .query('exec AlmacenamientoCrear @IdProducto, @IdSucursal, @Cantidad');

        res.send(result);
    } catch (error) {
        console.error("Error al crear registro de almacenamiento:", error);
        res.status(500).send("Error al crear registro de almacenamiento");
    }
}