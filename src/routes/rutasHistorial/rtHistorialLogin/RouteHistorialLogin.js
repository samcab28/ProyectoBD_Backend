import { Router } from 'express';
import { getHistorialLogin, getHistorialLoginById, getHistorialLoginByHora } from '../../../controllers/controllersHistorial/ctrHistorialLogin/ConsultaHistorialLogin.js';
import { createHistorialLogin } from '../../../controllers/controllersHistorial/ctrHistorialLogin/CreateHistorialLogin.js';


// Crear una nueva instancia de Router
const router = Router();

// Ruta para obtener todas los HistorialLogin
router.get('/HistorialLogin', getHistorialLogin);

// Ruta para obtener un solo HistorialLogin por ID
router.get('/HistorialLogin/:id', getHistorialLoginById);

//ruta para obtener un historial de login con fallas en los ultimos minutos
router.get('/HistorialLoginMinuto/:hora', getHistorialLoginById);

// Ruta para crear un nuevo HistorialLogin
router.post('/HistorialLogin', createHistorialLogin);


// Exportar el router para que pueda ser utilizado en otros archivos
export default router;

