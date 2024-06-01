import {getConnection} from "../../database/connection.js";

// Controlador para crear urls
export const createMarcaProducto = async (req, res) => {
    try {
        const { NombreMarcaPro} = req.body;
        const pool = await getConnection();
        const result = await pool.request()
            .input('NombreMarcaPro', NombreMarcaPro)
            .query('exec MarcaProductoCrear @NombreMarcaPro');
        res.send(result);
    } catch (error) {
        console.error("Error al crear url:", error);
        res.status(500).send("Error al crear url");
    }
}

