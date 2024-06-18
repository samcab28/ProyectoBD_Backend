import { getConnection } from "../../database/connection.js";

// Controlador para crear un nuevo producto
export const createProducto = async (req, res) => {
    try {
        const {
            NombreProducto,
            PrecioProducto,
            DescripcionProducto,
            Cantidad,
            IdSucursal,
            IdTipoPro,
            IdMarcaPro,
            IdURL
        } = req.body;

        const pool = await getConnection();
        const result = await pool.request()
            .input('NombreProducto', NombreProducto)
            .input('PrecioProducto', PrecioProducto)
            .input('DescripcionProducto', DescripcionProducto)
            .input('Cantidad', Cantidad)
            .input('IdSucursal', IdSucursal)
            .input('IdTipoPro', IdTipoPro)
            .input('IdMarcaPro', IdMarcaPro)
            .input('IdURL', IdURL)
            .query('exec ProductoCrear @NombreProducto, @PrecioProducto, @DescripcionProducto, @Cantidad, @IdSucursal, @IdTipoPro, @IdMarcaPro, @IdURL');

        res.send(result);
    } catch (error) {
        console.error("Error al crear producto:", error);
        res.status(500).send("Error al crear producto");
    }
}
