import {getConnection} from "../../database/connection.js";

// Contralador para crear ProductoRecetado
export const createProductoRecetado = async (req, res) => {
    try {
        const { cantidad, IdMedicamento, IdCita } = req.body; // Obtener los datos del cuerpo de la petición
        const pool = await getConnection();
        const result = await pool.request()
            .input('cantidad', cantidad)
            .input('IdMedicamento', IdMedicamento)
            .input('IdCita', IdCita)
            .query('exec ProductoRecetadoCrear @cantidad, @IdMedicamento, @IdCita'); // Utilizar una consulta parametrizada
        // Enviar una respuesta con el resultado de la consulta
        res.json({ message: 'Producto recetado creado correctamente' });
    } catch (error) {
        console.error("Error al crear producto recetado:", error);
        res.status(500).send("Error al crear producto recetado");
    }
}