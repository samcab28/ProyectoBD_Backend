// Controlador para obtener todos los medicamentos
export const getMedicamentos = (req, res) => {
    res.send("Obteniendo medicamentos");
}

// Controlador para obtener un solo medicamento por ID
export const getMedicamentoById = (req, res) => {
    res.send("Obteniendo un solo medicamento");
}
