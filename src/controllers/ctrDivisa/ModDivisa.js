import { getConnection } from "../../database/connection.js";
import sql from 'mssql';

// Controlador para modificar una divisa existente por ID
export const updateDivisa = async (req, res) => {
    try {
        const { id } = req.params; // Obtener el ID de los parámetros de la URL
        const { CampoModificar, ValorNuevo } = req.body; // Obtener los datos del cuerpo de la petición

        const pool = await getConnection();
        const result = await pool.request()
            .input('IdDivisa', sql.Int, id)
            .input('CampoModificar', sql.NVarChar(128), CampoModificar)
            .input('ValorNuevo', sql.NVarChar(255), ValorNuevo)
            .query('exec DivisaModificar @IdDivisa, @CampoModificar, @ValorNuevo'); // Utilizar una consulta parametrizada

        // Enviar una respuesta con el resultado de la consulta
        res.json({ message: 'Divisa modificada correctamente' });
    } catch (error) {
        console.error("Error al modificar divisa:", error);
        res.status(500).send("Error al modificar divisa");
    }
}
