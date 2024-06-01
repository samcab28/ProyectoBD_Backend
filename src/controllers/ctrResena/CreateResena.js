import { getConnection } from "../../database/connection.js";

// En tu controlador de Express
export const createResena = async (req, res) => {
    try {
        const { TituloRes, ContenidoRes, IdAutor, IdProducto } = req.body;
        const pool = await getConnection();
        const result = await pool.request()
            .input('TituloRes', TituloRes)
            .input('ContenidoRes', ContenidoRes)
            .input('IdAutor', IdAutor)
            .input('IdProducto', IdProducto)
            .query('exec ResenaProductoCrear @TituloRes, @ContenidoRes, @IdAutor, @IdProducto');
        res.send(result);
    } catch (error) {
        console.error("Error al crear reseña:", error);
        res.status(500).send("Error al crear reseña");
    }
}
