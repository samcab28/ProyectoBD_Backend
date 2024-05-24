import {getConnection} from "../../database/connection.js";

// Controlador para crear un nuevo medicamento
export const createMedicamento = async (req, res) => {
    try {
        const { Cantidad, FechaCaducidad, IdUnidadMedida, IdSucursal, IdTipoMedicamento, IdProducto, AptoPublico } = req.body;
        const pool = await getConnection();
        const result = await pool.request()
            .input('Cantidad', Cantidad)
            .input('FechaCaducidad', FechaCaducidad)
            .input('IdUnidadMedida', IdUnidadMedida)
            .input('IdSucursal', IdSucursal)
            .input('IdTipoMedicamento', IdTipoMedicamento)
            .input('IdProducto', IdProducto)
            .input('AptoPublico', AptoPublico)
            .query('exec Medicamento Crear @Cantidad, @FechaCaducidad, @IdUnidadMedida, @IdSucursal, @IdTipoMedicamento, @IdProducto, @AptoPublico');
        res.send(result);
    } catch (error) {
        console.error("Error al crear medicamento:", error);
        res.status(500).send("Error al crear medicamento");
    }
}
