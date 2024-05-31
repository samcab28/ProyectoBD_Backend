import {getConnection} from "../../database/connection.js";

// Controlador para obtener todas las urls
export const getMascota = async (req, res) => {
    try {
        const pool = await getConnection();
        const result = await pool.request().query('exec MascotasConsulta');
        // Enviar una respuesta con el resultado de la consulta
        res.send(result.recordset);
    } catch (error) {
        console.error("Error al obtener mascotas:", error);
        res.status(500).send("Error al obtener mascotas");
    }
}

//obtener detalles mascota
export const getMascotaDetalle = async (req, res) => {
    try {
        const pool = await getConnection();
        const result = await pool.request().query('EXEC MascotaDetalles');
        // Enviar una respuesta con el resultado de la consulta
        res.send(result.recordset);
    } catch (error) {
        console.error("Error al obtener mascotas:", error);
        res.status(500).send("Error al obtener mascotas");
    }
}

// Controlador para obtener una mascota por ID
export const getMascotaById = async (req, res) => {
    try {
        const { id } = req.params; // Obtener el ID de los parámetros de la URL
        const pool = await getConnection();
        const result = await pool.request()
            .input('id', id)
            .query('exec MascotasConsulta @id'); // Utilizar una consulta parametrizada
        // Enviar una respuesta con el resultado de la consulta
        res.send(result.recordset);
    } catch (error) {
        console.error("Error al obtener una mascosta:", error);
        res.status(500).send("Error al obtener una mascota");
    }
}

// Controlador para obtener una mascotas de un dueño por id
export const getMascotaByDuenio = async (req, res) => {
    try {
        const { id } = req.params; // Obtener el ID de los parámetros de la URL
        const pool = await getConnection();
        const result = await pool.request()
            .input('IdPersona', id)
            .query('exec MascotaConsultaPorDuenio @IdPersona'); // Utilizar una consulta parametrizada
        // Enviar una respuesta con el resultado de la consulta
        res.send(result.recordset);
    } catch (error) {
        console.error("Error al obtener una mascosta:", error);
        res.status(500).send("Error al obtener una mascota");
    }
}
