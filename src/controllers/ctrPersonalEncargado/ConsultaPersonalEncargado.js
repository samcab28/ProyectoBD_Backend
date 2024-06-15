import {getConnection} from "../../database/connection.js";

// Controlador para obtener todos los productos
export const getPersonalEncargado = async (req, res) => {
    try {
        const pool = await getConnection();
        const result = await pool.request().query('exec PersonalEncargadoConsulta');
        // Enviar una respuesta con el resultado de la consulta
        res.send(result.recordset);
    } catch(error){
        console.error("Error al obtener personal encargado:", error);
        res.status(500).send("Error al obtener personal encargado");
    }
}

// Controlador para obtener un solo producto por ID
export const getPersonalEncargadoById = async (req, res) => {
    try {
        const { id } = req.params; // Obtener el ID de los parámetros de la URL
        const pool = await getConnection();
        const result = await pool.request()
            .input('id', id)
            .query('exec PersonalEncargadoConsulta @id');
        // Enviar una respuesta con el resultado de la consulta
        res.send(result.recordset);
    } catch (error) {
        console.error("Error al obtener personal encargado especifico:", error);
        res.status(500).send("Error al obtener personal encargado especifico");
    }
}