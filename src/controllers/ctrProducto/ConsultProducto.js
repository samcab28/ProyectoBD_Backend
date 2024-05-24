// Controlador para obtener todos los productos
import {getConnection} from "../../database/connection.js";

export const getProductos = async (req, res) => {
    try {
        const pool = await getConnection();
        const result = await pool.request().query('exec ProductoConsulta');
        // Enviar una respuesta con el resultado de la consulta
        res.send(result.recordset);
    } catch(error){
        console.error("Error al obtener productos:", error);
        res.status(500).send("Error al obtener productos");
    }
}

// Controlador para obtener un solo producto por ID
export const getProductoById = async (req, res) => {
    try {
        const { id } = req.params; // Obtener el ID de los parámetros de la URL
        const pool = await getConnection();
        const result = await pool.request()
            .input('id', id)
            .query('exec ProductoConsulta @id'); // Utilizar una consulta parametrizada
        // Enviar una respuesta con el resultado de la consulta
        res.send(result.recordset);
    } catch (error) {
        console.error("Error al obtener un producto:", error);
        res.status(500).send("Error al obtener un producto");
    }
}
