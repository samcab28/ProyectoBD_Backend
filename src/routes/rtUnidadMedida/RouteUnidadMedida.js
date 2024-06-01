import { Router } from 'express';
import { getUnidadMedida, getUnidadMedidaById } from '../../controllers/ctrUnidadMedida/ConsultaUnidadMedida.js';

// Crear una nueva instancia de Router
const router = Router();

// Ruta para obtener todas las UnidadMedida
router.get('/unidadMedida', getUnidadMedida);

// Ruta para obtener una sola UnidadMedida por ID
router.get('/unidadMedida/:id', getUnidadMedidaById);

// Exportar el router para que pueda ser utilizado en otros archivos
export default router;

