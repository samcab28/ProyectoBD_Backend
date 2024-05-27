import {getConnection} from "../../database/connection.js";

// Contralador para crear HistorialClick 
export const createHistorialClick = async (req, res) => {
    try {
        const { fechaClick, IdPersona, Accion } = req.body; // Obtener los datos del cuerpo de la petición
        const pool = await getConnection();
        const result = await pool.request()
            .input('fechaClick', fechaClick)
            .input('IdPersona', IdPersona)
            .input('Accion', Accion)
            .query('exec HistorialClicksCrear @fechaClick, @IdPersona, @Accion'); // Utilizar una consulta parametrizada
        // Enviar una respuesta con el resultado de la consulta
        res.json({status: "HistorialClick creado"});
    } catch (error) {
        console.error("Error al crear HistorialClick:", error);
        res.status(500).send("Error al crear HistorialClick");
    }
}
