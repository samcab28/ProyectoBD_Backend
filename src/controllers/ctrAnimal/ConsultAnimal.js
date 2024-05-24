import {getConnection} from "../../database/connection.js";

// Controlador para obtener todas las personas
export const getAnimal = async (req, res) => {
    try {
        const pool = await getConnection();
        const result = await pool.request().query('exec AnimalConsulta');
        // Enviar una respuesta con el resultado de la consulta
        res.send(result.recordset);
    } catch (error) {
        console.error("Error al obtener animales:", error);
        res.status(500).send("Error al obtener animales");
    }
}


// Controlador para obtener una sola persona por ID
export const getAnimalById = async (req, res) => {
    try {
        const { id } = req.params; // Obtener el ID de los parámetros de la URL
        const pool = await getConnection();
        const result = await pool.request()
            .input('id', id)
            .query('exec AnimalConsulta @id'); // Utilizar una consulta parametrizada
        // Enviar una respuesta con el resultado de la consulta
        res.send(result.recordset);
    } catch (error) {
        console.error("Error al obtener un animal:", error);
        res.status(500).send("Error al obtener un animal");
    }
}

