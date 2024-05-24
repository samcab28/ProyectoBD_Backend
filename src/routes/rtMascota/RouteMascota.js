import { Router } from 'express';

// Crear una nueva instancia de Router
const router = Router();

// Ruta para obtener todas las mascotas
router.get('/mascota', (req, res) => {
    // Enviar una respuesta con un mensaje de obtención de mascotas
    res.send("obteniendo mascotas");
});

// Ruta para obtener una sola mascota por ID
router.get('/mascota/:id', (req, res) => {
    // Enviar una respuesta con un mensaje de obtención de una sola mascota
    res.send("obteniendo una sola mascota");
});

// Ruta para crear una nueva mascota
router.post('/mascota', (req, res) => {
    // Enviar una respuesta con un mensaje de creación de mascota
    res.send("creando mascota");
});

// Ruta para modificar una mascota existente por ID
router.put('/mascota/:id', (req, res) => {
    // Enviar una respuesta con un mensaje de modificación de mascota
    res.send("modificando mascota");
});

// Ruta para borrar una mascota existente por ID
router.delete('/mascota/:id', (req, res) => {
    // Enviar una respuesta con un mensaje de eliminación de mascota
    res.send("borrando mascota");
});

// Exportar el router para que pueda ser utilizado en otros archivos
export default router;
