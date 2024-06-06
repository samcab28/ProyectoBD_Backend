import { getConnection } from "../../database/connection.js";

// Controlador para crear un nuevo producto, medicamento y almacenamiento
export const createMedicamento = async (req, res) => {
    try {
        const {
            NombreProducto,
            PrecioProducto,
            DescripcionProducto,
            IdTipoPro,
            IdMarcaPro,
            IdUrl,
            FechaCaducidad,
            IdUnidadMedida,
            IdTipoMedicamento,
            AptoPublico,
            IdSucursal,
            Cantidad
        } = req.body;

        const pool = await getConnection();
        const result = await pool.request()
            .input('NombreProducto', NombreProducto)
            .input('PrecioProducto', PrecioProducto)
            .input('DescripcionProducto', DescripcionProducto)
            .input('IdTipoPro', IdTipoPro)
            .input('IdMarcaPro', IdMarcaPro)
            .input('IdUrl', IdUrl)
            .input('FechaCaducidad', FechaCaducidad)
            .input('IdUnidadMedida', IdUnidadMedida)
            .input('IdTipoMedicamento', IdTipoMedicamento)
            .input('AptoPublico', AptoPublico)
            .input('IdSucursal', IdSucursal)
            .input('Cantidad', Cantidad)
            .query('EXEC MedicamentoCrear @NombreProducto, @PrecioProducto, @DescripcionProducto, @IdTipoPro, @IdMarcaPro, @IdUrl, @FechaCaducidad, @IdUnidadMedida, @IdTipoMedicamento, @AptoPublico, @IdSucursal, @Cantidad');

        res.send(result.recordset);
    } catch (error) {
        console.error("Error al crear producto, medicamento y almacenamiento:", error);
        res.status(500).send("Error al crear producto, medicamento y almacenamiento");
    }
}
