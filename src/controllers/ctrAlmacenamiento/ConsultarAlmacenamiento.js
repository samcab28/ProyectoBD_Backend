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

// Controlador para obtener la cantidad total de un producto
export const getAlmacenamientoCantidadProductoGeneral = async (req, res) => {
    try {
        const { id } = req.params;
        const pool = await getConnection();
        const result = await pool.request()
            .input('IdProducto', id)
            .query('exec AlmacenamientoCantidadProductoGeneral @IdProducto');
        res.send(result.recordset);
    } catch (error) {
        console.error("Error al obtener la cantidad total de un producto:", error);
        res.status(500).send("Error al obtener la cantidad total de un producto");
    }
}

// Controlador para obtener la cantidad de un producto por sucursal
export const getAlmacenamientoCantidadProductoPorSucursal = async (req, res) => {
    try {
        const { id, sucursalId } = req.params;
        const pool = await getConnection();
        const result = await pool.request()
            .input('IdProducto', id)
            .input('IdSucursal', sucursalId)
            .query('exec AlmacenamientoCantidadProductoPorSucursal @IdProducto, @IdSucursal');
        res.send(result.recordset);
    } catch (error) {
        console.error("Error al obtener la cantidad de un producto por sucursal:", error);
        res.status(500).send("Error al obtener la cantidad de un producto por sucursal");
    }
}