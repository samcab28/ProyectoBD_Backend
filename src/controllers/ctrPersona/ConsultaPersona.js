import {getConnection} from "../../database/connection.js";

// Controlador para obtener todas las personas
export const getPersona = async (req, res) => {
    try {
        const pool = await getConnection();
        const result = await pool.request().query('exec PersonaConsulta');
        // Enviar una respuesta con el resultado de la consulta
        res.send(result.recordset);
    } catch (error) {
        console.error("Error al obtener personas:", error);
        res.status(500).send("Error al obtener personas");
    }
}


// Controlador para obtener una sola persona por ID
export const getPersonaById = async (req, res) => {
    try {
        const { id } = req.params; // Obtener el ID de los parámetros de la URL
        const pool = await getConnection();
        const result = await pool.request()
            .input('id', id)
            .query('exec PersonaConsulta @id'); // Utilizar una consulta parametrizada
        // Enviar una respuesta con el resultado de la consulta
        res.send(result.recordset);
    } catch (error) {
        console.error("Error al obtener una sola persona:", error);
        res.status(500).send("Error al obtener una sola persona");
    }
}



//get persona segun tipo
export const getPersonaByTipo = async (req, res) => {
    try {
        const { tipo } = req.params; // Obtener el ID de los parámetros de la URL
        const pool = await getConnection();
        const result = await pool.request()
            .input('tipo', tipo)
            .query('EXEC GetPersonasByTipoPersona @tipo'); // Utilizar una consulta parametrizada
        // Enviar una respuesta con el resultado de la consulta
        res.send(result.recordset);
    } catch (error) {
        console.error("Error al obtener la data:", error);
        res.status(500).send("Error al obtener la data");
    }
}

//get para admin por sucursal
export const getAdminBySucursal = async (req, res) => {
    try {
        const { sucursal } = req.params; // Obtener el ID de los parámetros de la URL
        const pool = await getConnection();
        const result = await pool.request()
            .input('sucursal', sucursal)
            .query('EXEC AdminConsultarPorSucursal @sucursal'); // Utilizar una consulta parametrizada
        // Enviar una respuesta con el resultado de la consulta
        res.send(result.recordset);
    } catch (error) {
        console.error("Error al obtener la data:", error);
        res.status(500).send("Error al obtener la data");
    }
}

// Función para obtener todas las personas bloqueadas
export const getBlockedPersons = async (req, res) => {
    try {
        const pool = await getConnection();
        const result = await pool.request().execute('ObtenerPersonasBloqueadas');
        res.json(result.recordset);
    } catch (error) {
        console.error("Error al obtener personas bloqueadas:", error);
        res.status(500).send("Error al obtener personas bloqueadas");
    }
};
