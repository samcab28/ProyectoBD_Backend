import { getConnection } from "../../database/connection.js";
import sql from 'mssql';

// Controlador para modificar un Cobro existente por ID
export const updateCobro = async (req, res) => {
    try {
        const { id } = req.params;
        const { campoModificar, valorNuevo } = req.body;

        console.log("Datos recibidos:", campoModificar, valorNuevo); // Verificar los datos recibidos

        const pool = await getConnection();

        const result = await pool.request()
            .input('IdCobro', sql.Int, id)
            .input('CampoModificar', sql.NVarChar, campoModificar)
            .input('ValorNuevo', sql.NVarChar, valorNuevo)
            .query('EXEC CobroModificar @IdCobro, @CampoModificar, @ValorNuevo');
        
        res.status(200).json({ message: 'Cobro modificado exitosamente', data: result.recordset });
    } catch (error) {
        console.error("Error al modificar Cobro:", error);
        res.status(500).send("Error al modificar Cobro");
    }
};