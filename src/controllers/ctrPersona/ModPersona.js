import { getConnection } from "../../database/connection.js";
import sql from 'mssql';
import { enviarCorreos } from '../../services/SendEmail.js';

// Controlador para modificar una persona existente por ID
export const updatePersona = async (req, res) => {
    try {
        const { id } = req.params;
        const { campoModificar, valorNuevo } = req.body;

        console.log("Datos recibidos:", campoModificar, valorNuevo); // Verificar los datos recibidos

        const pool = await getConnection();

        const result = await pool.request()
            .input('IdPersona', sql.Int, id)
            .input('CampoModificar', sql.NVarChar, campoModificar)
            .input('ValorNuevo', sql.NVarChar, valorNuevo)
            .query('EXEC PersonaModificar @IdPersona, @CampoModificar, @ValorNuevo');
        
        res.status(200).json({ message: 'Persona modificada exitosamente', data: result.recordset });
    } catch (error) {
        console.error("Error al modificar persona:", error);
        res.status(500).send("Error al modificar persona");
    }
};

// Controlador para bloquear una persona existente por ID
export const blockPersona = async (req, res) => {
    try {
        const { id } = req.params;

        const pool = await getConnection();

        const result = await pool.request()
            .input('IdPersona', sql.Int, id)
            .query('EXEC PersonaBloquear @IdPersona');
        
        res.status(200).json({ message: 'Persona bloqueada exitosamente', data: result.recordset });
    } catch (error) {
        console.error("Error al bloquear persona:", error);
        res.status(500).send("Error al bloquear persona");
    }
};

// Controlador para desbloquear una persona existente por ID
export const unblockPersona = async (req, res) => {
    try {
        const { id } = req.params;

        const pool = await getConnection();

        const result = await pool.request()
            .input('IdPersona', sql.Int, id)
            .query('EXEC PersonaDesbloquear @IdPersona');
        
        res.status(200).json({ message: 'Persona desbloqueada exitosamente', data: result.recordset });
    } catch (error) {
        console.error("Error al desbloquear persona:", error);
        res.status(500).send("Error al desbloquear persona");
    }
};
