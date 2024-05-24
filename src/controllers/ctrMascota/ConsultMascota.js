// Controlador para obtener todas las mascotas
export const getMascota = (req, res) => {
    res.send("obteniendo mascotas");
}

// Controlador para obtener una sola mascota por ID
export const getMascotaById = (req, res) => {
    res.send("obteniendo una sola mascota");
}
