import {getConnection} from "../../database/connection.js";

// Contralador para crear Divisa
export const createDivisa = async (req, res) => {
    try {
        const { TipoDivisa } = req.body; // Obtener los datos del cuerpo de la petición
        const pool = await getConnection();
        const result = await pool.request()
            .input('TipoDivisa', TipoDivisa)
            .query('exec DivisaCrear @TipoDivisa'); // Utilizar una consulta parametrizada
        // Enviar una respuesta con el resultado de la consulta
        res.json({ message: 'Divisa creada correctamente' });
    } catch (error) {
        console.error("Error al crear divisa:", error);
        res.status(500).send("Error al crear divisa");
    }
}


