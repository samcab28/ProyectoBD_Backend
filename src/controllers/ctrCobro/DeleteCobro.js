import {getConnection} from "../../database/connection.js";

// Controlador para borrar un Cobro existente por ID
export const deleteCobro = async (req, res) => {
    try{
        const {id} = req.params;
        const pool = await getConnection();
        const result = await pool.request()
            .input('IdCobro', id)
            .query('exec CobroEliminar @IdCobro');
        res.send(result);
    }catch(error){
        console.error("Error al borrado de cobro:", error);
        res.status(500).send("Error al borrado de cobro");
    }
}

