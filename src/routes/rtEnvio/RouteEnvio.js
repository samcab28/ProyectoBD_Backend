import { Router } from 'express';
import { getEnvio, getEnvioById } from '../../controllers/ctrEnvio/ConsultaEnvio.js';
import { deleteEnvio } from "../../controllers/ctrEnvio/DeleteEnvio.js";
import {createEnvio} from "../../controllers/ctrEnvio/CreateEnvio.js"
import {updateEnvio} from "../../controllers/ctrEnvio/ModEnvio.js";

// Crear una nueva instancia de Router
const router = Router();

// Ruta para obtener todas los envios
router.get('/envio', getEnvio);

// Ruta para obtener un solo envio por ID
router.get('/envio/:id', getEnvioById);

// Ruta para crear un nuevo envio
router.post('/envio', createEnvio);

// Ruta para modificar un envio existente por ID
router.put('/envio/:id', updateEnvio);

// Ruta para borrar un envio existente por ID
router.delete('/envio/:id', deleteEnvio);

// Exportar el router para que pueda ser utilizado en otros archivos
export default router;

