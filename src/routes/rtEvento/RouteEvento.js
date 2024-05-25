import { Router } from 'express';
import { getEvento, getEventoById } from '../../controllers/ctrEvento/ConsultaEvento.js';
import { deleteEvento } from "../../controllers/ctrEvento/DeleteEvento.js";
import {createEvento} from "../../controllers/ctrEvento/CreateEvento.js"
import {updateEvento} from "../../controllers/ctrEvento/ModEvento.js";

// Crear una nueva instancia de Router
const router = Router();

// Ruta para obtener todas los eventos
router.get('/evento', getEvento);

// Ruta para obtener un solo evento por ID
router.get('/evento/:id', getEventoById);

// Ruta para crear un nuevo evento
router.post('/evento', createEvento);

// Ruta para modificar un evento existente por ID
router.put('/evento/:id', updateEvento);

// Ruta para borrar un evento existente por ID
router.delete('/evento/:id', deleteEvento);

// Exportar el router para que pueda ser utilizado en otros archivos
export default router;

