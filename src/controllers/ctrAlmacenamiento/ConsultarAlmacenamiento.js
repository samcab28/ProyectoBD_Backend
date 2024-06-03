import {getConnection} from "../../database/connection.js";

// Controlador para obtener todos los registros de almacenamiento
export const getAlmacenamientos = async (req, res) => {
    try {
        const pool = await getConnection();
        const result = await pool.request().query('exec AlmacenamientoConsultar');
        // Enviar una respuesta con el resultado de la consulta
        res.send(result.recordset);
    } catch(error){
        console.error("Error al obtener almacenamientos:", error);
        res.status(500).send("Error al obtener almacenamientos");
    }
}

// Controlador para obtener la cantidad total de un producto por id producto
export const getAlmacenamientoCantidadProducto = async (req, res) => {
    try {
        const { id } = req.params; // Obtener el ID de los parámetros de la URL
        const pool = await getConnection();
        const result = await pool.request()
            .input('IdProducto', id)
            .query('exec AlmacenamientoCantidadProducto @IdProducto'); // Utilizar una consulta parametrizada
        // Enviar una respuesta con el resultado de la consulta
        res.send(result.recordset);
    } catch (error) {
        console.error("Error al obtener la cantidad total de un producto:", error);
        res.status(500).send("Error al obtener la cantidad total de un producto");
    }
}
