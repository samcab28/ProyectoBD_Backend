import {getConnection} from "../../database/connection.js";

// En tu controlador de Express
export const createAnimal = async (req, res) => {
    try {
        const { NombreAnimal, RazaAnimal } = req.body;
        const pool = await getConnection();
        const result = await pool.request()
            .input('NombreAnimal', NombreAnimal)
            .input('RazaAnimal', RazaAnimal)
            .query('exec AnimalCrear @NombreAnimal, @RazaAnimal ');
        res.send(result);
    } catch (error) {
        console.error("Error al crear animal:", error);
        res.status(500).send("Error al crear animal");
    }
}
