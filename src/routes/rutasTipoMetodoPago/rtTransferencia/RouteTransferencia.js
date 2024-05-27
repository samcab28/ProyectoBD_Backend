import { Router } from 'express';
import { getTransferencia, getTransferenciaById } from '../../../controllers/controllersMetodoDePago/ctrTransferencia/ConsultaTransferencia.js';
import { createTransferencia } from '../../../controllers/controllersMetodoDePago/ctrTransferencia/CreateTransferencia.js';
import { deleteTransferencia } from '../../../controllers/controllersMetodoDePago/ctrTransferencia/DeleteTransferencia.js';

// Crear una nueva instancia de Router
const router = Router();

// Ruta para obtener todas los Transferencia
router.get('/Transferencia', getTransferencia);

// Ruta para obtener un solo Transferencia por ID
router.get('/Transferencia/:id', getTransferenciaById);

// Ruta para crear un nuevo Transferencia
router.post('/Transferencia', createTransferencia);

// Ruta para eliminar un Transferencia
router.delete('/Transferencia/:id', deleteTransferencia);

// Exportar el router para que pueda ser utilizado en otros archivos
export default router;


