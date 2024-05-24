import {getConnection} from "../../database/connection.js";

// Controlador para crear urls
export const createUrl = async (req, res) => {
    try {
        const { Url, DescripcionUrl } = req.body;
        const pool = await getConnection();
        const result = await pool.request()
            .input('Url', Url)
            .input('DescripcionUrl', DescripcionUrl)
            .query('exec UrlCrear @Url, @DescripcionUrl');
        res.send(result);
    } catch (error) {
        console.error("Error al crear url:", error);
        res.status(500).send("Error al crear url");
    }
}

