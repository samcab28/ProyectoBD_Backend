import { getConnection } from "../../database/connection.js";
import sql from 'mssql';

// Controlador para modificar una Producto existente por ID
export const updateProducto = async (req, res) => {
    try {
        const { id } = req.params;
        const { campoModificar, valorNuevo } = req.body;

        console.log("Datos recibidos:", campoModificar, valorNuevo); // Verificar los datos recibidos

        const pool = await getConnection();

        const result = await pool.request()
            .input('IdProducto', sql.Int, id)
            .input('CampoModificar', sql.NVarChar, campoModificar)
            .input('ValorNuevo', sql.NVarChar, valorNuevo)
            .query('EXEC ProductoModificar @IdProducto, @CampoModificar, @ValorNuevo');
        
        res.status(200).json({ message: 'Producto modificado exitosamente', data: result.recordset });
    } catch (error) {
        console.error("Error al modificar producto:", error);
        res.status(500).send("Error al modificar producto");
    }
};

