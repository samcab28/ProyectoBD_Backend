import { Router } from 'express';

// Crear una nueva instancia de Router
const router = Router();

// Ruta para obtener todas las sucursales
router.get('/sucursal', (req, res) => {
    // Enviar una respuesta con un mensaje de obtención de sucursales
    res.send("obteniendo sucursales");
});

// Ruta para obtener una sola sucursal por ID
router.get('/sucursal/:id', (req, res) => {
    // Enviar una respuesta con un mensaje de obtención de una sola sucursal
    res.send("obteniendo una sola sucursal");
});

// Ruta para crear una nueva sucursal
router.post('/sucursal', (req, res) => {
    // Enviar una respuesta con un mensaje de creación de sucursal
    res.send("creando sucursal");
});

// Ruta para modificar una sucursal existente por ID
router.put('/sucursal/:id', (req, res) => {
    // Enviar una respuesta con un mensaje de modificación de sucursal
    res.send("modificando sucursal");
});

// Ruta para borrar una sucursal existente por ID
router.delete('/sucursal/:id', (req, res) => {
    // Enviar una respuesta con un mensaje de eliminación de sucursal
    res.send("borrando sucursal");
});

// Exportar el router para que pueda ser utilizado en otros archivos
export default router;
