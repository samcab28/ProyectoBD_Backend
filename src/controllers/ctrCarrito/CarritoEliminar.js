import { getConnection } from "../../database/connection.js";
import sql from "mssql";

// Controlador para eliminar un carrito mediante Id 
export const deleteCarrito = async (req, res) => {
    try {
        const { idCarrito } = req.params; // Obtener el ID de los parámetros de la URL
        const pool = await getConnection();
        const result = await pool.request()
            .input('IdCarrito', sql.Int, idCarrito) // Asegúrate de que se está utilizando el tipo de dato correcto
            .query('EXEC CarritoEliminar @IdCarrito'); // Utilizar una consulta parametrizada
        // Enviar una respuesta con el resultado de la consulta
        res.json(result);
    } catch (error) {
        console.error("Error al eliminar un carrito:", error);
        res.status(500).send("Error al eliminar un carrito");
    }
}
