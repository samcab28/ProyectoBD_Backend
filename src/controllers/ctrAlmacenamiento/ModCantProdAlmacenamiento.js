import { getConnection } from "../../database/connection.js";
import sql from 'mssql';

// Controlador para modificar la cantidad de producto en el almacenamiento
export const updateCantProdAlmacenamiento = async (req, res) => {
    try {
        const { IdProducto, IdSucursal, NuevaCantidad } = req.body;
        const pool = await getConnection();

        const result = await pool.request()
            .input('IdProducto', sql.Int, IdProducto)
            .input('IdSucursal', sql.Int, IdSucursal)
            .input('NuevaCantidad', sql.Int, NuevaCantidad)
            .query('EXEC AlmacenamientoModificarCantPro @IdProducto, @IdSucursal, @NuevaCantidad');

        res.status(200).json({ message: 'Cantidad de producto en almacenamiento modificada exitosamente', data: result.recordset });
    } catch (error) {
        console.error("Error al modificar cantidad de producto en almacenamiento:", error);
        res.status(500).send("Error al modificar cantidad de producto en almacenamiento");
    }
};