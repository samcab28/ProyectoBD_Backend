import { getConnection } from "../../database/connection.js";
import sql from 'mssql';

// Controlador para crear un nuevo personal
export const createPersonalEncargado = async (req, res) => {
    try {
        const {
            IdPersona,
	        IdCita
        } = req.body;

        const pool = await getConnection();
        const result = await pool.request()
            .input('IdPersona', sql.Int, IdPersona)
            .input('IdCita', sql.Int, IdCita)
            .query('exec PersonalEncargadoCrear @IdPersona, @IdCita');

        res.send(result);
    } catch (error) {
        console.error("Error al crear personal encargado:", error);
        res.status(500).send("Error al personal encargado");
    }
}
