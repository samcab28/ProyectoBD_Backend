import { Router } from 'express';

// Crear una nueva instancia de Router
const router = Router();

// Ruta para obtener todos los productos
router.get('/producto', (req, res) => {
    // Enviar una respuesta con un mensaje de obtención de productos
    res.send("obteniendo productos");
});

// Ruta para obtener un solo producto por ID
router.get('/producto/:id', (req, res) => {
    // Enviar una respuesta con un mensaje de obtención de un solo producto
    res.send("obteniendo un solo producto");
});

// Ruta para crear un nuevo producto
router.post('/producto', (req, res) => {
    // Enviar una respuesta con un mensaje de creación de producto
    res.send("creando producto");
});

// Ruta para modificar un producto existente por ID
router.put('/producto/:id', (req, res) => {
    // Enviar una respuesta con un mensaje de modificación de producto
    res.send("modificando producto");
});

// Ruta para borrar un producto existente por ID
router.delete('/producto/:id', (req, res) => {
    // Enviar una respuesta con un mensaje de eliminación de producto
    res.send("borrando producto");
});

// Exportar el router para que pueda ser utilizado en otros archivos
export default router;
