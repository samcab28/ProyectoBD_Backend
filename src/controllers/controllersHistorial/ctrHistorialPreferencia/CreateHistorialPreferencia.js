import {getConnection} from "../../database/connection.js";

// Contralador para crear HistorialPreferencia
export const createHistorialPreferencia = async (req, res) => {
    try {
        const { IdPersona, IdProducto } = req.body; // Obtener los datos del cuerpo de la petición
        const pool = await getConnection();
        const result = await pool.request()
            .input('IdPersona', IdPersona)
            .input('IdProducto', IdProducto)
            .query('exec PreferenciasUsuarioCrear @IdPersona, @IdProducto'); // Utilizar una consulta parametrizada
        // Enviar una respuesta con el resultado de la consulta
        res.json({ message: 'HistorialPreferencia creado correctamente' });
    } catch (error) {
        console.error("Error al crear HistorialPreferencia:", error);
        res.status(500).send("Error al crear HistorialPreferencia");
    }
}