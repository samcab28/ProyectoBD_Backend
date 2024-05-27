import { Router } from 'express';
import { getHistorialClick, getHistorialClickById } from '../../../controllers/controllersHistorial/ctrHistorialClick/ConsultaHistorialClick.js';
import { createHistorialClick } from '../../../controllers/controllersHistorial/ctrHistorialClick/CreateHistorialClick.js';
import { deleteHistorialClick } from '../../../controllers/controllersHistorial/ctrHistorialClick/DeleteHistorialClick.js';

// Crear una nueva instancia de Router
const router = Router();

// Ruta para obtener todas los HistorialClick
router.get('/HistorialClick', getHistorialClick);

// Ruta para obtener un solo HistorialClick por ID
router.get('/HistorialClick/:id', getHistorialClickById);

// Ruta para crear un nuevo HistorialClick
router.post('/HistorialClick', createHistorialClick);

// Ruta para eliminar un HistorialClick
router.delete('/HistorialClick/:id', deleteHistorialClick);

// Exportar el router para que pueda ser utilizado en otros archivos
export default router;

