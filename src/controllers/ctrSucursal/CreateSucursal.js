import {getConnection} from "../../database/connection.js";
// Controlador para crear una nueva sucursal
export const createSucursal = async (req, res) => {
    try {
        const { NombreSucursal,  TelefonoSucursal, DireccionSucursal, HoraApertura, HoraCierre,  Gerente  } = req.body;
        const pool = await getConnection();
        const result = await pool.request()
            .input('NombreSucursal', NombreSucursal)
            .input('TelefonoSucursal', TelefonoSucursal)
            .input('DireccionSucursal', DireccionSucursal)
            .input('HoraApertura', HoraApertura)
            .input('HoraCierre', HoraCierre)
            .input('Gerente', Gerente)
            .query('exec SucursalCrear @NombreSucursal, @TelefonoSucursal, @DireccionSucursal, @HoraApertura, @HoraCierre, @Gerente');
        res.send(result.recordset);
    } catch (error) {
        console.error("Error al crear persona:", error);
        res.status(500).send("Error al crear persona");
    }
}
