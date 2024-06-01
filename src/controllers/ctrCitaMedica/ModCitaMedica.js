import { getConnection } from "../../database/connection.js";
import sql from 'mssql';

// Controlador para modificar una CitaMedica existente por ID
export const updateCitaMedica = async (req, res) => {
    try {
        const { id } = req.params;
        const { campoModificar, valorNuevo } = req.body;

        console.log("Datos recibidos:", campoModificar, valorNuevo); // Verificar los datos recibidos

        const pool = await getConnection();

        const result = await pool.request()
            .input('IdCitaMed', sql.Int, id)
            .input('CampoModificar', sql.NVarChar, campoModificar)
            .input('ValorNuevo', sql.NVarChar, valorNuevo)
            .query('EXEC CitaMedicaModificar @IdCitaMed, @CampoModificar, @ValorNuevo');
        
        res.status(200).json({ message: 'Cita médica modificada exitosamente', data: result.recordset });
    } catch (error) {
        console.error("Error al modificar cita médica:", error);
        res.status(500).send("Error al modificar cita médica");
    }
};