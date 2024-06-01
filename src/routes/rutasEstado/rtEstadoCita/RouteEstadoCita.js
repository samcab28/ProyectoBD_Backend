import { Router } from 'express';
import { getEstadoCita, getEstadoCitaById } from '../../../controllers/controllersEstado/ctrEstadoCita/ConsultaEstadoCita.js';

// Crear una nueva instancia de Router
const router = Router();

// Ruta para obtener todas los EstadoCita
router.get('/estadoCita', getEstadoCita);

// Ruta para obtener un solo EstadoCita por ID
router.get('/estadoCita/:id', getEstadoCitaById);

// Exportar el router para que pueda ser utilizado en otros archivos
export default router;