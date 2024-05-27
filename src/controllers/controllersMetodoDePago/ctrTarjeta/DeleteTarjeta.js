import {getConnection} from "../../database/connection.js";

// Controlador para borrar un Tarjeta existente por ID
export const deleteTarjeta = async (req, res) => {
    try {
        const { id } = req.params; // Obtener el ID de los parámetros de la URL
        const pool = await getConnection();
        const result = await pool.request()
            .input('IdTarjeta', id)
            .query('exec TarjetaEliminar @IdTarjeta'); // Utilizar una consulta parametrizada
        // Enviar una respuesta con el resultado de la consulta
        res.json({ message: 'Tarjeta eliminado correctamente' });
    } catch (error) {
        console.error("Error al eliminar Tarjeta:", error);
        res.status(500).send("Error al eliminar Tarjeta");
    }
}
