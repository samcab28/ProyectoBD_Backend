import { getConnection } from "../../database/connection.js";
import sql from 'mssql';

// Controlador para modificar una ProductoReceteado existente por ID
export const updateProductoRecetado = async (req, res) => {
    try {
        const { id } = req.params;
        const { campoModificar, valorNuevo } = req.body;

        console.log("Datos recibidos:", campoModificar, valorNuevo); // Verificar los datos recibidos

        const pool = await getConnection();

        const result = await pool.request()
            .input('IdProdRec', sql.Int, id)
            .input('CampoModificar', sql.NVarChar, campoModificar)
            .input('ValorNuevo', sql.NVarChar, valorNuevo)
            .query('EXEC ProductoRecetadoModificar @IdProdRec, @CampoModificar, @ValorNuevo');
        
        res.status(200).json({ message: 'Producto recetado modificado exitosamente', data: result.recordset });
    } catch (error) {
        console.error("Error al modificar producto recetado:", error);
        res.status(500).send("Error al modificar producto recetado");
    }
};
