import { Router } from 'express';
import { getEstadoPedido, getEstadoPedidoById } from '../../../controllers/controllersEstado/ctrEstadoPedido/ConsultaEstadoPedido.js';

// Crear una nueva instancia de Router
const router = Router();

// Ruta para obtener todas los EstadoPedido
router.get('/estadoPedido', getEstadoPedido);

// Ruta para obtener un solo EstadoPedido por ID
router.get('/estadoPedido/:id', getEstadoPedidoById);

// Exportar el router para que pueda ser utilizado en otros archivos
export default router;

