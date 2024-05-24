import { Router } from 'express';

// Crear una nueva instancia de Router
const router = Router();

// Ruta para obtener todas las personas
router.get('/persona', (req, res) => {
    // Enviar una respuesta con un mensaje de obtención de personas
    res.send("obteniendo personas");
});

// Ruta para obtener una sola persona por ID
router.get('/persona/:id', (req, res) => {
    // Enviar una respuesta con un mensaje de obtención de una sola persona
    res.send("obteniendo una sola persona");
});

// Ruta para crear una nueva persona
router.post('/persona', (req, res) => {
    // Enviar una respuesta con un mensaje de creación de persona
    res.send("creando persona");
});

// Ruta para modificar una persona existente por ID
router.put('/persona/:id', (req, res) => {
    // Enviar una respuesta con un mensaje de modificación de persona
    res.send("modificando persona");
});

// Ruta para borrar una persona existente por ID
router.delete('/persona/:id', (req, res) => {
    // Enviar una respuesta con un mensaje de eliminación de persona
    res.send("borrando persona");
});

// Exportar el router para que pueda ser utilizado en otros archivos
export default router;
