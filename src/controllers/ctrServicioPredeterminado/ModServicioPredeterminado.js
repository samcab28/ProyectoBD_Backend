import { getConnection } from "../../database/connection.js";
import sql from 'mssql';

// Controlador para modificar un ServicioPredeterminado existente por ID
export const updateServicioPredeterminado = async (req, res) => {
    try {
        const { id } = req.params; // Obtener el ID de los parámetros de la URL
        const { CampoModificar, ValorNuevo } = req.body; // Obtener los datos del cuerpo de la petición

        const pool = await getConnection();
        const result = await pool.request()
            .input('IdServicio', sql.Int, id)
            .input('CampoModificar', sql.NVarChar(128), CampoModificar)
            .input('ValorNuevo', sql.NVarChar(255), ValorNuevo)
            .query('exec ServicioPredeterminadoModificar @IdServicio, @CampoModificar, @ValorNuevo'); // Utilizar una consulta parametrizada

        // Enviar una respuesta con el resultado de la consulta
        res.json({ message: 'ServicioPredeterminado modificado correctamente' });
    } catch (error) {
        console.error("Error al modificar ServicioPredeterminado:", error);
        res.status(500).send("Error al modificar ServicioPredeterminado");
    }
}