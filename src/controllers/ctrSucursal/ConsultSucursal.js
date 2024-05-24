// Controlador para obtener todas las sucursales
import {getConnection} from "../../database/connection.js";

export const getSucursal = async (req, res) => {
    try {
        const pool = await getConnection();
        const result = await pool.request().query('exec SucursalConsulta');
        // Enviar una respuesta con el resultado de la consulta
        res.send(result.recordset);
    } catch (error) {
        console.error("Error al obtener sucursales:", error);
        res.status(500).send("Error al obtener sucursales");
    }
}

// Controlador para obtener una sola sucursal por ID
export const getSucursalById = async (req, res) => {
    try {
        const { id } = req.params; // Obtener el ID de los parámetros de la URL
        const pool = await getConnection();
        const result = await pool.request()
            .input('id', id)
            .query('exec SucursalConsulta @id'); // Utilizar una consulta parametrizada
        // Enviar una respuesta con el resultado de la consulta
        res.send(result.recordset);
    } catch (error) {
        console.error("Error al obtener una sola Sucursal:", error);
        res.status(500).send("Error al obtener una sola Sucursal");
    }
}
