import { Router } from 'express';
import { getTipoProducto, getTipoProductoById } from '../../../controllers/controllersTipoDe/ctrTipoProducto/ConsultaTipoProducto.js'

// Crear una nueva instancia de Router
const router = Router();

// Ruta para obtener todas los TipoProducto
router.get('/tipoProducto', getTipoProducto);

// Ruta para obtener un solo TipoProducto por ID
router.get('/tipoProducto/:id', getTipoProductoById);

// Exportar el router para que pueda ser utilizado en otros archivos
export default router;