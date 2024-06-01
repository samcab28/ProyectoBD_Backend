import { getConnection } from "../../database/connection.js";
import sql from 'mssql';

// Controlador para modificar una Animal existente por ID
export const updateAnimal = async (req, res) => {
    try {
        const { id } = req.params;
        const { campoModificar, valorNuevo } = req.body;

        console.log("Datos recibidos:", campoModificar, valorNuevo); // Verificar los datos recibidos

        const pool = await getConnection();

        const result = await pool.request()
            .input('IdAnimal', sql.Int, id)
            .input('CampoModificar', sql.NVarChar, campoModificar)
            .input('ValorNuevo', sql.NVarChar, valorNuevo)
            .query('EXEC AnimalModificar @IdAnimal, @CampoModificar, @ValorNuevo');
        
        res.status(200).json({ message: 'Animal modificado exitosamente', data: result.recordset });
    } catch (error) {
        console.error("Error al modificar Animal:", error);
        res.status(500).send("Error al modificar Animal");
    }
};