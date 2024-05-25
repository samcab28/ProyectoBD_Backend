import {getConnection} from "../../database/connection.js";

// Controlador para obtener todas los HistorialPreferencia
export const getHistorialPreferencia = async (req, res) => {
    try {
        const pool = await getConnection();
        const result = await pool.request().query('exec PreferenciasUsuarioConsulta');
        // Enviar una respuesta con el resultado de la consulta
        res.send(result.recordset);
    } catch (error) {
        console.error("Error al obtener HistorialPreferencias:", error);
        res.status(500).send("Error al obtener HistorialPreferencias");
    }
}

// Controlador para obtener HistorialPreferencias por id
export const getHistorialPreferenciaById = async (req, res) => {
    try {
        const { id } = req.params; // Obtener el ID de los parámetros de la URL
        const pool = await getConnection();
        const result = await pool.request()
            .input('IdPreferencia', id)
            .query('exec PreferenciasUsuarioConsulta @IdPreferencia'); // Utilizar una consulta parametrizada
        // Enviar una respuesta con el resultado de la consulta
        res.send(result.recordset);
    } catch (error) {
        console.error("Error al obtener un solo HistorialPreferencia:", error);
        res.status(500).send("Error al obtener un solo HistorialPreferencia");
    }
}

