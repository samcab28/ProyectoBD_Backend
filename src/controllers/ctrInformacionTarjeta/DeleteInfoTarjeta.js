import { getConnection } from "../../database/connection.js";
import sql from "mssql";

// Controlador para eliminar (marcar como no vigente) un registro de InformacionTarjeta
export const deleteInformacionTarjeta = async (req, res) => {
    try {
        const { IdInformacionTarjeta } = req.params;
        const pool = await getConnection();
        const result = await pool.request()
            .input('IdInformacionTarjeta', sql.Int, IdInformacionTarjeta)
            .query('exec InformacionTarjetaEliminar @IdInformacionTarjeta');
        res.json({ message: 'Información de tarjeta eliminada (no vigente) correctamente' });
    } catch (error) {
        console.error("Error al eliminar información de tarjeta:", error);
        res.status(500).send("Error al eliminar información de tarjeta");
    }
};