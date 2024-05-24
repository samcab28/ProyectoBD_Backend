// Controlador para obtener todos los productos
export const getProductos = (req, res) => {
    res.send("Obteniendo productos");
}

// Controlador para obtener un solo producto por ID
export const getProductoById = (req, res) => {
    res.send("Obteniendo un solo producto");
}
