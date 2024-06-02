import {getConnection} from "../../database/connection.js";

// Controlador para obtener todas las personas
export const getResena = async(req, res) => {
    try {
        const pool = await getConnection();
        const result = await pool.request().query('exec ResenaProductoConsulta');
        // Enviar una respuesta con el resultado de la consulta
        res.send(result.recordset);
    } catch (error) {
        console.error("Error al obtener resena:", error);
        res.status(500).send("Error al obtener resena");
    }
}


// Controlador para obtener una sola persona por ID
export const getResenaById = async (req, res) => {
    try {
        const { id } = req.params; // Obtener el ID de los parámetros de la URL
        const pool = await getConnection();
        const result = await pool.request()
            .input('id', id)
            .query('exec ResenaProductoConsulta @id'); // Utilizar una consulta parametrizada
        // Enviar una respuesta con el resultado de la consulta
        res.send(result.recordset);
    } catch (error) {
        console.error("Error al obtener una sola resena:", error);
        res.status(500).send("Error al obtener una sola resena");
    }
}


export const getResenaCompleta = async(req, res) => {
    try {
        const pool = await getConnection();
        const result = await pool.request().query('exec ResenaProductoCompleta');
        // Enviar una respuesta con el resultado de la consulta
        res.send(result.recordset);
    } catch (error) {
        console.error("Error al obtener resena:", error);
        res.status(500).send("Error al obtener resena");
    }
}


// Controlador para obtener una sola persona por ID
export const getResenaCompletaById = async (req, res) => {
    try {
        const { id } = req.params; // Obtener el ID de los parámetros de la URL
        const pool = await getConnection();
        const result = await pool.request()
            .input('id', id)
            .query('exec ResenaProductoCompleta @id'); // Utilizar una consulta parametrizada
        // Enviar una respuesta con el resultado de la consulta
        res.send(result.recordset);
    } catch (error) {
        console.error("Error al obtener una sola resena:", error);
        res.status(500).send("Error al obtener una sola resena");
    }
}


// Controlador para obtener una resena segun id producto
export const getResenabyIdProducto = async (req, res) => {
    try {
        const { id } = req.params; // Obtener el ID de los parámetros de la URL
        const pool = await getConnection();
        const result = await pool.request()
            .input('id', id)
            .query(' exec ResenaProductoPorIdProducto @id'); // Utilizar una consulta parametrizada
        // Enviar una respuesta con el resultado de la consulta
        res.send(result.recordset);
    } catch (error) {
        console.error("Error al obtener una sola resena:", error);
        res.status(500).send("Error al obtener una sola resena");
    }
}


// Controlador para obtener puntuacion de un producto segun la resena
export const getPuntuacionByProducto = async (req, res) => {
    try {
        const { id } = req.params; // Obtener el ID de los parámetros de la URL
        const pool = await getConnection();
        const result = await pool.request()
            .input('id', id)
            .query('exec PuntuacionProducto @id'); // Utilizar una consulta parametrizada
        // Enviar una respuesta con el resultado de la consulta
        res.send(result.recordset);
    } catch (error) {
        console.error("Error al obtener una sola resena:", error);
        res.status(500).send("Error al obtener una sola resena");
    }
}
