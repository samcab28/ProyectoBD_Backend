import { getConnection } from "../../../database/connection.js";
import sql from 'mssql';

// Controlador para crear Tarjeta
export const createTarjeta = async (req, res) => {
    try {
        const { NombrePropietario, NumeroTarjeta, CodigoSeguridad, FechaVencimiento, IdCobro } = req.body; // Obtener los datos del cuerpo de la petición
        const pool = await getConnection();
        const result = await pool.request()
            .input('NombrePropietario', sql.NVarChar(256), NombrePropietario)
            .input('NumeroTarjeta', sql.BigInt, NumeroTarjeta) // Cambiado a BigInt
            .input('CodigoSeguridad', sql.Int, CodigoSeguridad)
            .input('FechaVencimiento', sql.Date, FechaVencimiento)
            .input('IdCobro', sql.Int, IdCobro)
            .query('exec TarjetaCrear @NombrePropietario, @NumeroTarjeta, @CodigoSeguridad, @FechaVencimiento, @IdCobro');
        // Enviar una respuesta con el resultado de la consulta
        res.json({ message: 'Tarjeta creado correctamente' });
    } catch (error) {
        console.error("Error al crear Tarjeta:", error);
        res.status(500).send("Error al crear Tarjeta");
    }
}
