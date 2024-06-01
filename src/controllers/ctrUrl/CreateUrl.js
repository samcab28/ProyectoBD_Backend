import {getConnection} from "../../database/connection.js";

// Controlador para crear urls
export const createUrl = async (req, res) => {
    try {
        const { Url} = req.body;
        const pool = await getConnection();
        const result = await pool.request()
            .input('Url', Url)
            .query('exec DirrecionURLCrear @Url');
        res.send(result);
    } catch (error) {
        console.error("Error al crear url:", error);
        res.status(500).send("Error al crear url");
    }
}

