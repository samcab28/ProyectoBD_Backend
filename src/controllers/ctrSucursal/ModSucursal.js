import { getConnection } from "../../database/connection.js";
import sql from 'mssql';

// Controlador para modificar una Sucursal existente por ID
export const updateSucursal = async (req, res) => {
    try {
        const { id } = req.params;
        const { campoModificar, valorNuevo } = req.body;

        console.log("Datos recibidos:", campoModificar, valorNuevo); // Verificar los datos recibidos

        const pool = await getConnection();

        const result = await pool.request()
            .input('IdSucursal', sql.Int, id)
            .input('CampoModificar', sql.NVarChar, campoModificar)
            .input('ValorNuevo', sql.NVarChar, valorNuevo)
            .query('EXEC SucursalModificar @IdSucursal, @CampoModificar, @ValorNuevo');
        
        res.status(200).json({ message: 'Sucursal modificada exitosamente', data: result.recordset });
    } catch (error) {
        console.error("Error al modificar sucursal:", error);
        res.status(500).send("Error al modificar sucursal");
    }
};

