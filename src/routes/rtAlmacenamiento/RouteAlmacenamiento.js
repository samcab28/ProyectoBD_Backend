import { Router } from 'express';
import { getAlmacenamientoCantidadProducto, getAlmacenamientos } from '../../controllers/ctrAlmacenamiento/ConsultarAlmacenamiento.js';
import { createAlmacenamiento } from '../../controllers/ctrAlmacenamiento/CreateAlmacenamiento.js';
import { deleteAlmacenamiento } from '../../controllers/ctrAlmacenamiento/DeleteAlmacenamiento.js';

// Crear una nueva instancia de Router
const router = Router();

// Ruta para obtener todos los registros de almacenamiento
router.get('/almacenamiento', getAlmacenamientos);

// Ruta para obtener la cantidad total de un producto por id producto
router.get('/almacenamiento/:id', getAlmacenamientoCantidadProducto);

// Ruta para crear un nuevo registro de almacenamiento
router.post('/almacenamiento', createAlmacenamiento);

// Ruta para borrar un registro de almacenamiento por ID
router.delete('/almacenamiento/:id', deleteAlmacenamiento);

// Exportar el router para que pueda ser utilizado en otros archivos
export default router;