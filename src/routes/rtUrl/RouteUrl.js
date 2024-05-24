import { Router } from 'express';
import { getUrl, getUrlById } from '../../controllers/ctrUrl/ConsultUrl.js';
import { createUrl} from '../../controllers/ctrUrl/CreateUrl.js'
import { deleteUrl } from '../../controllers/ctrUrl/DeleteUrl.js';
import { updateUrl } from '../../controllers/ctrUrl/ModUrl.js';


// Crear una nueva instancia de Router
const router = Router();

// Ruta para obtener todos los usuarios
router.get('/direccionurl', getUrl);

// Ruta para obtener un solo usuario por ID
router.get('/direccionurl/:id', getUrlById);

// Ruta para crear un nuevo usuario
router.post('/direccionurl', createUrl);

// Ruta para modificar un usuario existente por ID
router.put('/direccionurl/:id', updateUrl);

// Ruta para borrar un usuario existente por ID
router.delete('/direccionurl/:id', deleteUrl);

// Exportar el router para que pueda ser utilizado en otros archivos
export default router;
