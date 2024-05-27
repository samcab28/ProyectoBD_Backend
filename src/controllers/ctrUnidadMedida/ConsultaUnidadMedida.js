import {getConnection} from "../../database/connection.js";

// Controlador para obtener todas las UnidadesMedida
export const getUnidadMedida = async (req, res) => {
    try {
        const pool = await getConnection();
        const result = await pool.request().query('exec UnidadMedidaConsulta');
        // Enviar una respuesta con el resultado de la consulta
        res.send(result.recordset);
    } catch (error) {
        console.error("Error al obtener UnidadesMedida:", error);
        res.status(500).send("Error al obtener UnidadesMedida");
    }
}

// Controlador para obtener UnidadMedida por id
export const getUnidadMedidaById = async (req, res) => {
    try {
        const { id } = req.params; // Obtener el ID de los parámetros de la URL
        const pool = await getConnection();
        const result = await pool.request()
            .input('IdUnidad', id)
            .query('exec UnidadMedidaConsulta @IdUnidad'); // Utilizar una consulta parametrizada
        // Enviar una respuesta con el resultado de la consulta
        res.send(result.recordset);
    } catch (error) {
        console.error("Error al obtener una sola UnidadMedida:", error);
        res.status(500).send("Error al obtener una sola UnidadMedida");
    }
}