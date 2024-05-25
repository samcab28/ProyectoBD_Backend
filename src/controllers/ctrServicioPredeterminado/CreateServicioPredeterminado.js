import {getConnection} from "../../database/connection.js";

// Contralador para crear ServicioPredetermiando
export const createServicioPredeterminado = async (req, res) => {
    try {
        const { Descripcion, Precio } = req.body; // Obtener los datos del cuerpo de la petición
        const pool = await getConnection();
        const result = await pool.request()
            .input('Descripcion', sql.NVarChar(256), Descripcion)
            .input('Precio', sql.Decimal(10, 2), Precio)
            .query('exec ServicioPredeterminadoCrear @Descripcion, @Precio'); // Utilizar una consulta parametrizada
        // Enviar una respuesta con el resultado de la consulta
        res.json({ message: 'ServicioPredeterminado creado correctamente' });
    } catch (error) {
        console.error("Error al crear ServicioPredeterminado:", error);
        res.status(500).send("Error al crear ServicioPredeterminado");
    }
}
