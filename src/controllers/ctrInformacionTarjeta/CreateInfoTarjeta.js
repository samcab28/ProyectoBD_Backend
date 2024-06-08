import { getConnection } from "../../database/connection.js";
import sql from "mssql";

// Controlador para crear un nuevo registro de InformacionTarjeta
export const createInformacionTarjeta = async (req, res) => {
    try {
        const { NombrePropietario, NumeroTarjeta, CodigoSeguridad, FechaVencimiento, IdPersona } = req.body;
        const pool = await getConnection();
        const result = await pool.request()
            .input('NombrePropietario', sql.NVarChar, NombrePropietario)
            .input('NumeroTarjeta', sql.BigInt, NumeroTarjeta)
            .input('CodigoSeguridad', sql.Int, CodigoSeguridad)
            .input('FechaVencimiento', sql.Date, FechaVencimiento)
            .input('IdPersona', sql.Int, IdPersona)
            .input('Vigente', sql.Bit, 1) // Valor por defecto 1 (verdadero)
            .query('exec InformacionTarjetaCrear @NombrePropietario, @NumeroTarjeta, @CodigoSeguridad, @FechaVencimiento, @IdPersona, @Vigente');
        const idTarjeta = result.recordset[0].IdInformacionTarjeta;
        res.json({ message: 'Información de tarjeta creada correctamente', IdInformacionTarjeta: idTarjeta });
    } catch (error) {
        console.error("Error al crear información de tarjeta:", error);
        res.status(500).send("Error al crear información de tarjeta");
    }
};
