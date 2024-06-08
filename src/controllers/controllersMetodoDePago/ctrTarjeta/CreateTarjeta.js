import { getConnection } from "../../../database/connection.js";
import sql from 'mssql';

// Controlador para crear Tarjeta
export const createTarjeta = async (req, res) => {
    try {
        const { IdInformacionTarjeta, IdCobro } = req.body;
        const pool = await getConnection();
        const result = await pool.request()
            .input('IdInformacionTarjeta', sql.Int, IdInformacionTarjeta)
            .input('IdCobro', sql.Int, IdCobro)
            .query('exec TarjetaCrear @IdInformacionTarjeta, @IdCobro');
        const newTarjetaId = result.recordset[0].IdTarjeta; // Captura el ID de la tarjeta recién creada
        res.json({ message: 'Tarjeta creada correctamente', IdTarjeta: newTarjetaId });
    } catch (error) {
        console.error("Error al crear tarjeta:", error);
        res.status(500).send("Error al crear tarjeta");
    }
};

