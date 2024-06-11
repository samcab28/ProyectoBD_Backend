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


// Controlador para actualizar el estado de una cita médica a cancelado
export const updateCitaEstadoCancelado = async (req, res) => {
    try {
        const { id } = req.params;

        console.log("ID de la cita a cancelar:", id); // Verificar el ID recibido

        const pool = await getConnection();

        const result = await pool.request()
            .input('IdCitaMed', sql.Int, id)
            .query('EXEC CitaActualizarEstadoCancelado @IdCitaMed');

        res.status(200).json({ message: 'Estado de la cita actualizado a cancelado exitosamente', data: result.recordset });
    } catch (error) {
        console.error("Error al actualizar el estado de la cita:", error);
        res.status(500).send("Error al actualizar el estado de la cita");
    }
};
