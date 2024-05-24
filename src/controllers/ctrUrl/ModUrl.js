import {getConnection} from "../../database/connection.js";

// Controlador para modificar una URL por ID
export const updateUrl = async (req, res) => {
    try {
        const { id } = req.params; // Obtener el ID de los parámetros de la URL
        const { Url, DescripcionUrl } = req.body; // Obtener los datos del cuerpo de la petición
        const pool = await getConnection();
        const result = await pool.request()
            .input('id', id)
            .input('Url', Url)
            .input('DescripcionUrl', DescripcionUrl)
            .query('exec UrlModificar @id, @Url, @DescripcionUrl'); // Utilizar una consulta parametrizada
        // Enviar una respuesta con el resultado de la consulta
        res.send(result);
    } catch (error) {
        console.error("Error al modificar una URL:", error);
        res.status(500).send("Error al modificar una URL");
    }
}
