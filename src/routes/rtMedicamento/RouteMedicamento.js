import { Router } from 'express';

// Crear una nueva instancia de Router
const router = Router();

// Ruta para obtener todos los medicamentos
router.get('/medicamento', (req, res) => {
    // Enviar una respuesta con un mensaje de obtención de medicamentos
    res.send("obteniendo medicamentos");
});

// Ruta para obtener un solo medicamento por ID
router.get('/medicamento/:id', (req, res) => {
    // Enviar una respuesta con un mensaje de obtención de un solo medicamento
    res.send("obteniendo un solo medicamento");
});

// Ruta para crear un nuevo medicamento
router.post('/medicamento', (req, res) => {
    // Enviar una respuesta con un mensaje de creación de medicamento
    res.send("creando medicamento");
});

// Ruta para modificar un medicamento existente por ID
router.put('/medicamento/:id', (req, res) => {
    // Enviar una respuesta con un mensaje de modificación de medicamento
    res.send("modificando medicamento");
});

// Ruta para borrar un medicamento existente por ID
router.delete('/medicamento/:id', (req, res) => {
    // Enviar una respuesta con un mensaje de eliminación de medicamento
    res.send("borrando medicamento");
});

// Exportar el router para que pueda ser utilizado en otros archivos
export default router;
