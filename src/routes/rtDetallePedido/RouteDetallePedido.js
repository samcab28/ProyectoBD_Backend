import { Router } from 'express';
import { getDetallePedido, getDetallePedidoById, getDetallePedidoByPedido } from '../../controllers/ctrDetallePedido/ConsultaDetallePedido.js';
import { deleteDetallePedido } from "../../controllers/ctrDetallePedido/DeleteDetallePedido.js";
import {createDetallePedido} from "../../controllers/ctrDetallePedido/CreateDetallePedido.js"
import {updateDetallePedido} from "../../controllers/ctrDetallePedido/ModDetallePedido.js";

// Crear una nueva instancia de Router
const router = Router();

// Ruta para obtener todas los detalles de pedido
router.get('/detallepedido', getDetallePedido);

// Ruta para obtener un solo detalle de pedido por ID
router.get('/detallepedido/:id', getDetallePedidoById);

// Ruta para obtener detalles de pedido por ID de pedido
router.get('/detallepedido/pedido/:id', getDetallePedidoByPedido);

// Ruta para crear un nuevo detalle de pedido
router.post('/detallepedido', createDetallePedido);

// Ruta para modificar un detalle de pedido existente por ID
router.put('/detallepedido/:id', updateDetallePedido);

// Ruta para borrar un detalle de pedido existente por ID
router.delete('/detallepedido/:id', deleteDetallePedido);

// Exportar el router para que pueda ser utilizado en otros archivos
export default router;

