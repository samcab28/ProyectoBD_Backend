import { Router } from 'express';
import { getTipoPersona, getTipoPersonaById } from '../../../controllers/controllersTipoDe/ctrTipoPersona/ConsultaTipoPersona.js'

// Crear una nueva instancia de Router
const router = Router();

// Ruta para obtener todas los TipoPersona
router.get('/tipoPersona', getTipoPersona);

// Ruta para obtener un solo TipoPersona por ID
router.get('/tipoPersona/:id', getTipoPersonaById);

// Exportar el router para que pueda ser utilizado en otros archivos
export default router;
