import { getConnection } from "../../database/connection.js";

// Controlador para obtener el carrito de un usuario por su IdPersona
export const getCarritoByUser = async (req, res) => {
    try {
        const { idPersona } = req.params; // Obtener el ID de los parámetros de la URL
        const pool = await getConnection();
        const result = await pool.request()
            .input('IdPersona', idPersona)
            .query('exec CarritoConsultarPorUsuario @IdPersona'); // Utilizar una consulta parametrizada
        // Enviar una respuesta con el resultado de la consulta
        res.send(result.recordset);
    } catch (error) {
        console.error("Error al obtener un carrito:", error);
        res.status(500).send("Error al obtener un carrito");
    }
}
