import { Router } from 'express';
import { getEstadoEnvio, getEstadoEnvioById } from '../../controllers/ctrEstadoEnvio/ConsultaEstadoEnvio.js';

// Crear una nueva instancia de Router
const router = Router();

// Ruta para obtener todas los EstadoEnvio
router.get('/estadoEnvio', getEstadoEnvio);

// Ruta para obtener un solo EstadoEnvio por ID
router.get('/estadoEnvio/:id', getEstadoEnvioById);

// Exportar el router para que pueda ser utilizado en otros archivos
export default router;

