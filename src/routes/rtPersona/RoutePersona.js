import { Router } from 'express';
import { getPersona, getPersonaById, getPersonaByTipo} from '../../controllers/ctrPersona/ConsultaPersona.js';
import { deletePersona} from "../../controllers/ctrPersona/DeletePersona.js";
import {createPersona} from "../../controllers/ctrPersona/CreatePersona.js"
import {updatePersona} from "../../controllers/ctrPersona/ModPersona.js";

// Crear una nueva instancia de Router
const router = Router();

// Ruta para obtener todas las personas
router.get('/persona', getPersona);

// Ruta para obtener una sola persona por ID
router.get('/persona/:id', getPersonaById);

// Ruta para obtener personas por tipo
router.get('/persona/tipo/:tipo', getPersonaByTipo);

// Ruta para crear una nueva persona
router.post('/persona', createPersona);

// Ruta para modificar una persona existente por ID
router.put('/persona/:id', updatePersona);

// Ruta para borrar una persona existente por ID
router.delete('/persona/:id', deletePersona);

// Exportar el router para que pueda ser utilizado en otros archivos
export default router;
