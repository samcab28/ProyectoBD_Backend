import {getConnection} from "../../database/connection.js";

// Controlador para crear una nueva persona
export const createPersona = (req, res) => {
    try{

    } catch (error) {
        console.error("Error al crear persona:", error);
        res.status(500).send("Error al crear persona");
    }

}
