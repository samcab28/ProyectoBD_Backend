import { getConnection } from "../../database/connection.js";
import sql from 'mssql';

// Controlador para modificar un Envio existente por ID
export const updateEnvio = async (req, res) => {
    try {
        const { id } = req.params; // Obtener el ID de los parámetros de la URL
        const { campoModificar, valorNuevo } = req.body; // Obtener los datos del cuerpo de la petición

        const pool = await getConnection();
        const result = await pool.request()
            .input('IdEnvio', sql.Int, id)
            .input('CampoModificar', sql.NVarChar(128), campoModificar)
            .input('ValorNuevo', sql.NVarChar(255), valorNuevo)
            .query('exec EnvioModificar @IdEnvio, @CampoModificar, @ValorNuevo'); // Utilizar una consulta parametrizada

        // Enviar una respuesta con el resultado de la consulta
        res.json({ message: 'Envio modificado correctamente' });
    } catch (error) {
        console.error("Error al modificar envio:", error);
        res.status(500).send("Error al modificar envio");
    }
}
