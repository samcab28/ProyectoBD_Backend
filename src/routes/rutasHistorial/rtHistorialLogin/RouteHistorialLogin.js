import { Router } from 'express';
import { getHistorialLogin, getHistorialLoginById } from '../../../controllers/controllersHistorial/ctrHistorialLogin/ConsultaHistorialLogin.js';
import { createHistorialLogin } from '../../../controllers/controllersHistorial/ctrHistorialLogin/CreateHistorialLogin.js';
import { deleteHistorialLogin } from '../../../controllers/controllersHistorial/ctrHistorialLogin/DeleteHistorialLogin.js';

// Crear una nueva instancia de Router
const router = Router();

// Ruta para obtener todas los HistorialLogin
router.get('/HistorialLogin', getHistorialLogin);

// Ruta para obtener un solo HistorialLogin por ID
router.get('/HistorialLogin/:id', getHistorialLoginById);

// Ruta para crear un nuevo HistorialLogin
router.post('/HistorialLogin', createHistorialLogin);

// Ruta para eliminar un HistorialLogin
router.delete('/HistorialLogin/:id', deleteHistorialLogin);

// Exportar el router para que pueda ser utilizado en otros archivos
export default router;

