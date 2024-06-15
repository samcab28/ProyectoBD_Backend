import { Router } from 'express';
import { getPersonalEncargado, getPersonalEncargadoById } from '../../controllers/ctrPersonalEncargado/ConsultaPersonalEncargado.js';
import { deletePersonalEncargado } from '../../controllers/ctrPersonalEncargado/DeletePersonalEncargado.js';
import { createPersonalEncargado } from '../../controllers/ctrPersonalEncargado/CreatePersonalEncargado.js';
import { updatePersonalEncargado } from '../../controllers/ctrPersonalEncargado/ModPersonalEncargado.js';

// Crear una nueva instancia de Router
const router = Router();

router.get('/personalEncargado', getPersonalEncargado);

router.get('/personalEncargado/:idCita', getPersonalEncargadoById);

router.post('/personalEncargado', createPersonalEncargado);

router.put('/personalEncargado/:idPersona/:idCita', updatePersonalEncargado);

router.delete('/personalEncargado/:idPersona/:idCita', deletePersonalEncargado);

// Exportar el router para que pueda ser utilizado en otros archivos
export default router;
