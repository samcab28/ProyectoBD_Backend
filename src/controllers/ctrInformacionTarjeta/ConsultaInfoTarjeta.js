import { getConnection } from "../../database/connection.js";
import sql from "mssql";

// Controlador para consultar registros de InformacionTarjeta por IdPersona
export const getInformacionTarjetaPorPersona = async (req, res) => {
    try {
        const { IdPersona } = req.params;
        const pool = await getConnection();
        const result = await pool.request()
            .input('IdPersona', sql.Int, IdPersona)
            .query('exec InformacionTarjetaConsultarPorPersona @IdPersona');
        res.json(result.recordset);
    } catch (error) {
        console.error("Error al obtener información de tarjeta por persona:", error);
        res.status(500).send("Error al obtener información de tarjeta por persona");
    }
};