import {getConnection} from "../../database/connection.js";
import sql from "mssql";

// En tu controlador de Express
export const createMascota = async (req, res) => {
    try {
        const { NombreMascota, Edad, Sexo, Animal, Duegno } = req.body;
        const pool = await getConnection();
        const result = await pool.request()
            .input('NombreMascota', sql.NVarChar ,NombreMascota)
            .input('Edad', sql.Int ,Edad)
            .input('Sexo', sql.Int , Sexo)
            .input('Animal', sql.Int ,Animal)
            .input('Duegno', sql.Int , Duegno)
            .query('exec MascotaCrear @NombreMascota, @Edad, @Sexo, @Animal, @Duegno');
        res.send(result);
    } catch (error) {
        console.error("Error al crear mascota:", error);
        res.status(500).send("Error al crear mascota");
    }
}
