import { getConnection } from "../../database/connection.js";
import sql from 'mssql';

// Controlador para modificar la cantidad de un carrito 
export const modifyCarritoQuantity = async (req, res) => {
    try {
        const { idCarrito, nuevaCantidad } = req.params; // Obtener los datos de los parámetros de la URL
        const pool = await getConnection();
        const result = await pool.request()
            .input('IdCarrito', sql.INT, idCarrito)
            .input('NuevaCantidad', sql.INT , nuevaCantidad)
            .query('EXEC CarritoModificarCantidad @IdCarrito, @NuevaCantidad'); // Utilizar una consulta parametrizada
        // Enviar una respuesta con el resultado de la consulta
        res.json(result.recordset[0]);
    } catch (error) {
        console.error("Error al modificar la cantidad de un carrito:", error);
        res.status(500).send("Error al modificar la cantidad de un carrito");
    }
}
