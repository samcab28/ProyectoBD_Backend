import { Router } from 'express';
import { getPedido, getPedidoById } from '../../controllers/ctrPedido/ConsultaPedido.js';
import { deletePedido } from "../../controllers/ctrPedido/DeletePedido.js";
import {createPedido} from "../../controllers/ctrPedido/CreatePedido.js"
import {updatePedido} from "../../controllers/ctrPedido/ModPedido.js";

// Crear una nueva instancia de Router
const router = Router();

// Ruta para obtener todas los pedidos
router.get('/pedido', getPedido);

// Ruta para obtener un solo pedido por ID
router.get('/pedido/:id', getPedidoById);

// Ruta para crear un nuevo pedido
router.post('/pedido', createPedido);

// Ruta para modificar un pedido existente por ID
router.put('/pedido/:id', updatePedido);

// Ruta para borrar un pedido existente por ID
router.delete('/pedido/:id', deletePedido);

// Exportar el router para que pueda ser utilizado en otros archivos
export default router;
