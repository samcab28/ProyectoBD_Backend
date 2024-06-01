import { Router } from 'express';
import { getExpediente, getExpedienteById } from '../../controllers/ctrExpediente/ConsultaExpediente.js';
import { deleteExpediente} from "../../controllers/ctrExpediente/DeleteExpediente.js";
import {createExpediente} from "../../controllers/ctrExpediente/CreateExpediente.js"
import {updateExpediente} from "../../controllers/ctrExpediente/ModExpediente.js";

// Crear una nueva instancia de Router
const router = Router();

// Ruta para obtener todas los expedientes
router.get('/expediente', getExpediente);

// Ruta para obtener un solo expediente por ID
router.get('/expediente/:id', getExpedienteById);

// Ruta para crear un nuevo expediente
router.post('/expediente', createExpediente);

// Ruta para modificar un expediente existente por ID
router.put('/expediente/:id', updateExpediente);

// Ruta para borrar un expediente existente por ID
router.delete('/expediente/:id', deleteExpediente);

// Exportar el router para que pueda ser utilizado en otros archivos
export default router;