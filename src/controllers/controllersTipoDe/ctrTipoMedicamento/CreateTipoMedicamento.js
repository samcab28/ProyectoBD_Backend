import {getConnection} from "../../database/connection.js";

// Contralador para crear TipoMedicamento
export const createTipoMedicamento = async (req, res) => {
    try {
        const { TipoMedicamento } = req.body; // Obtener los datos del cuerpo de la petición
        const pool = await getConnection();
        const result = await pool.request()
            .input('TipoMedicamento', TipoMedicamento)
            .query('exec TipoMedicamentoCrear @TipoMedicamento'); // Utilizar una consulta parametrizada
        // Enviar una respuesta con el resultado de la consulta
        res.json({ message: 'Tipo de medicamento creado correctamente' });
    } catch (error) {
        console.error("Error al crear tipo de medicamento:", error);
        res.status(500).send("Error al crear tipo de medicamento");
    }
}
 