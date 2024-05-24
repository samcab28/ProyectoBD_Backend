import {getConnection} from "../../database/connection.js";

// Controlador para obtener todas las personas
export const getMarcaProducto = async (req, res) => {
    try {
        const pool = await getConnection();
        const result = await pool.request().query('exec MarcaProductosConsulta');
        // Enviar una respuesta con el resultado de la consulta
        res.send(result.recordset);
    } catch (error) {
        console.error("Error al obtener MarcaProducto:", error);
        res.status(500).send("Error al obtener MarcaProducto");
    }
}


// Controlador para obtener una sola persona por ID
export const getMarcaProductoById = async (req, res) => {
    try {
        const { id } = req.params; // Obtener el ID de los parámetros de la URL
        const pool = await getConnection();
        const result = await pool.request()
            .input('id', id)
            .query('exec MarcaProductosConsulta @id'); // Utilizar una consulta parametrizada
        // Enviar una respuesta con el resultado de la consulta
        res.send(result.recordset);
    } catch (error) {
        console.error("Error al obtener un MarcaProducto:", error);
        res.status(500).send("Error al obtener un MarcaProducto");
    }
}

