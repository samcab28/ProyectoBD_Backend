import { getConnection } from "../../database/connection.js";
import sql from 'mssql';

// Controlador para modificar una Producto existente por ID
export const updatePersonalEncargado = async (req, res) => {
    try {
        const { idPersona, idCita } = req.params;
        const { campoModificar, valorNuevo } = req.body;

        console.log("Datos recibidos:", campoModificar, valorNuevo); // Verificar los datos recibidos

        const pool = await getConnection();

        const result = await pool.request()
            .input('IdPersona', sql.Int, idPersona)
            .input('IdCita', sql.Int, idCita)
            .input('CampoModificar', sql.NVarChar, campoModificar)
            .input('ValorNuevo', sql.NVarChar, valorNuevo)
            .query('EXEC PersonalEncargadoModificar @IdPersona, @IdCita, @CampoModificar, @ValorNuevo');
        
        res.status(200).json({ message: 'Personal Encargado modificado exitosamente', data: result.recordset });
    } catch (error) {
        console.error("Error al modificar personal encargado:", error);
        res.status(500).send("Error al modificar personal encargado");
    }
};

