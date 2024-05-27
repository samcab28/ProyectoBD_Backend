import {getConnection} from "../../../database/connection.js";

// Controlador para obtener todas los TipoMedicamento
export const getTipoMedicamento = async (req, res) => {
    try {
        const pool = await getConnection();
        const result = await pool.request().query('exec TipoMedicamentoConsulta');
        // Enviar una respuesta con el resultado de la consulta
        res.send(result.recordset);
    } catch (error) {
        console.error("Error al obtener TipoMedicamento:", error);
        res.status(500).send("Error al obtener TipoMedicamento");

    }
}

// Controlador para obtener un TipoMedicamento por ID
export const getTipoMedicamentoById = async (req, res) => {
    try {
        const { id } = req.params; // Obtener el ID de los parámetros de la URL
        const pool = await getConnection();
        const result = await pool.request()
            .input('id', id)
            .query('exec TipoMedicamentoConsulta @id'); // Utilizar una consulta parametrizada
        // Enviar una respuesta con el resultado de la consulta
        res.send(result.recordset);
    } catch (error) {
        console.error("Error al obtener un solo TipoMedicamento:", error);
        res.status(500).send("Error al obtener un solo TipoMedicamento");
    }
}