import {getConnection} from "../../database/connection.js";

export const deleteDireccionPersona = async (req, res) => {
    try{
        const {id} = req.params;
        const pool = await getConnection();
        const result = await pool.request()
            .input('IdDireccionPer', id)
            .query('exec DireccionPersonaEliminar @IdDireccionPer');
        res.send(result);
    }catch(error){
        console.error("Error al borrado de direccion:", error);
        res.status(500).send("Error al borrado de direccion");
    }
}
