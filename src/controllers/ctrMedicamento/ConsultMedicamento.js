// Controlador para obtener todos los medicamentos
import {getConnection} from "../../database/connection.js";

export const getMedicamentos = async (req, res) => {
    try {
        const pool = await getConnection();
        const result = await pool.request().query('exec MedicamentoConsulta');
        // Enviar una respuesta con el resultado de la consulta
        res.send(result);
    } catch (error) {
        console.error("Error al obtener medicamentos:", error);
        res.status(500).send("Error al obtener medicamentos");
    }
}

// Controlador para obtener un solo medicamento por ID
export const getMedicamentoById = async (req, res) => {
    try {
        const { id } = req.params; // Obtener el ID de los parámetros de la URL
        const pool = await getConnection();
        const result = await pool.request()
            .input('id', id)
            .query('exec MedicamentoConsulta @id'); // Utilizar una consulta parametrizada
        // Enviar una respuesta con el resultado de la consulta
        res.send(result.recordset);
    } catch (error) {
        console.error("Error al obtener un medicamento:", error);
        res.status(500).send("Error al obtener una medicamento");
    }
}
