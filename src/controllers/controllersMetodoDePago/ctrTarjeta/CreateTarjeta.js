import {getConnection} from "../../../database/connection.js";

// Contralador para crear Tarjeta 
export const createTarjeta = async (req, res) => {
    try {
        const { NombrePropietario, NumeroTarjeta, CodigoSeguridad, FechaVencimiento, IdCobro } = req.body; // Obtener los datos del cuerpo de la petición
        const pool = await getConnection();
        const result = await pool.request()
            .input('NombrePropietario', NombrePropietario)
            .input('NumeroTarjeta', NumeroTarjeta)
            .input('CodigoSeguridad', CodigoSeguridad)
            .input('FechaVencimiento', FechaVencimiento)
            .input('IdCobro', IdCobro)
            .query('exec TarjetaCrear @NombrePropietario, @NumeroTarjeta, @CodigoSeguridad, @FechaVencimiento, @IdCobro'); // Utilizar una consulta parametrizada
        // Enviar una respuesta con el resultado de la consulta
        res.json({ message: 'Tarjeta creado correctamente' });
    } catch (error) {
        console.error("Error al crear Tarjeta:", error);
        res.status(500).send("Error al crear Tarjeta");
    }
}

