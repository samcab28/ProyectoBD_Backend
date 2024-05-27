import {getConnection} from "../../database/connection.js";

// Controlador para obtener todas los sexos
export const getSexo = async (req, res) => {
    try {
        const pool = await getConnection();
        const result = await pool.request().query('exec SexoConsulta');
        // Enviar una respuesta con el resultado de la consulta
        res.send(result.recordset);
    } catch (error) {
        console.error("Error al obtener sexos:", error);
        res.status(500).send("Error al obtener sexos");
    }
}

// Controlador para obtener sexo por id
export const getSexoById = async (req, res) => {
    try {
        const { id } = req.params; // Obtener el ID de los parámetros de la URL
        const pool = await getConnection();
        const result = await pool.request()
            .input('IdSexo', id)
            .query('exec SexoConsulta @IdSexo'); // Utilizar una consulta parametrizada
        // Enviar una respuesta con el resultado de la consulta
        res.send(result.recordset);
    } catch (error) {
        console.error("Error al obtener un solo sexo:", error);
        res.status(500).send("Error al obtener un solo sexo");
    }
}