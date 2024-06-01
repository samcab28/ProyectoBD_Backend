import {getConnection} from "../../database/connection.js";

// Controlador para obtener todas los ServiciosPredeterminados
export const getServicioPredeterminado = async (req, res) => {
    try {
        const pool = await getConnection();
        const result = await pool.request().query('exec ServicioPredeterminadoConsulta');
        // Enviar una respuesta con el resultado de la consulta
        res.send(result.recordset);
    } catch (error) {
        console.error("Error al obtener ServiciosPredeterminados:", error);
        res.status(500).send("Error al obtener ServiciosPredeterminados");
    }
}

// Controlador para obtener ServiciosPredeterminados por id
export const getServicioPredeterminadoById = async (req, res) => {
    try {
        const { id } = req.params; // Obtener el ID de los parámetros de la URL
        const pool = await getConnection();
        const result = await pool.request()
            .input('IdServicio', id)
            .query('exec ServicioPredeterminadoConsulta @IdServicio'); // Utilizar una consulta parametrizada
        // Enviar una respuesta con el resultado de la consulta
        res.send(result.recordset);
    } catch (error) {
        console.error("Error al obtener un solo ServicioPredeterminado:", error);
        res.status(500).send("Error al obtener un solo ServicioPredeterminado");
    }
}

