import {getConnection} from "../../database/connection.js";

export const deletePersonalEncargado = async (req, res) => {
    try{
        const { idPersona, idCita } = req.params;
        const pool = await getConnection();
        const result = await pool.request()
            .input('IdPersona', idPersona)
            .input('IdCita', idCita)
            .query('exec PersonalEncargadoEliminar @IdPersona, @IdCita');
        res.send(result);
    }catch(error){
        console.error("Error al borrar personal encargado:", error);
        res.status(500).send("Error al borrar personal encargado");
    }
}
