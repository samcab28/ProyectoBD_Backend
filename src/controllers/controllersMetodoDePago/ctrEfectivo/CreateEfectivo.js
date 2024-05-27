import {getConnection} from "../../../database/connection.js";

// Contralador para crear Efectivo 
export const createEfectivo = async (req, res) => {
    try {
        const { IdCobro } = req.body; // Obtener los datos del cuerpo de la petición
        const pool = await getConnection();
        const result = await pool.request()
            .input('IdCobro', IdCobro)
            .query('exec EfectivoCrear @IdCobro'); // Utilizar una consulta parametrizada
        // Enviar una respuesta con el resultado de la consulta
        res.json({ message: 'Efectivo creado correctamente' });
    } catch (error) {
        console.error("Error al crear Efectivo:", error);
        res.status(500).send("Error al crear Efectivo");
    }
}

