import {getConnection} from "../../database/connection.js";

// En tu controlador de Express
export const createPersona = async (req, res) => {
    try {
        const { TipoPersona, Sexo, NombrePersona, ApellidoPersona, TelefonoPersona, CorreoPersona, UsuarioPersona, PasswordPersona } = req.body;
        const pool = await getConnection();
        const result = await pool.request()
            .input('ctrTipoPersona', TipoPersona)
            .input('Sexo', Sexo)
            .input('NombrePersona', NombrePersona)
            .input('ApellidoPersona', ApellidoPersona)
            .input('TelefonoPersona', TelefonoPersona)
            .input('CorreoPersona', CorreoPersona)
            .input('UsuarioPersona', UsuarioPersona)
            .input('PasswordPersona', PasswordPersona)
            .query('exec PersonaCrear @ctrTipoPersona, @Sexo, @NombrePersona, @ApellidoPersona, @TelefonoPersona, @CorreoPersona, @UsuarioPersona, @PasswordPersona');
        res.send(result);
    } catch (error) {
        console.error("Error al crear persona:", error);
        res.status(500).send("Error al crear persona");
    }
}
