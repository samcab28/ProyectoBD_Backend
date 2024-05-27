import {getConnection} from "../../../database/connection.js";

// Controlador para obtener todas las Tarjeta
export const getTarjeta = async (req, res) => {
    try {
        const pool = await getConnection();
        const result = await pool.request().query('exec TarjetaConsulta');
        // Enviar una respuesta con el resultado de la consulta
        res.send(result.recordset);
    } catch (error) {
        console.error("Error al obtener Tarjeta:", error);
        res.status(500).send("Error al obtener Tarjeta");
    }
}

// Controlador para obtener Tarjeta por id
export const getTarjetaById = async (req, res) => {
    try {
        const { id } = req.params; // Obtener el ID de los parámetros de la URL
        const pool = await getConnection();
        const result = await pool.request()
            .input('IdTarjeta', id)
            .query('exec TarjetaConsulta @IdTarjeta'); // Utilizar una consulta parametrizada
        // Enviar una respuesta con el resultado de la consulta
        res.send(result.recordset);
    } catch (error) {
        console.error("Error al obtener un solo Tarjeta:", error);
        res.status(500).send("Error al obtener un solo Tarjeta");
    }
}

