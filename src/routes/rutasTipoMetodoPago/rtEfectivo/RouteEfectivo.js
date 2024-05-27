import { Router } from 'express';
import { getEfectivo, getEfectivoById } from '../../../controllers/controllersMetodoDePago/ctrEfectivo/ConsultaEfectivo.js'; 
import { createEfectivo } from '../../../controllers/controllersMetodoDePago/ctrEfectivo/CreateEfectivo.js'; 
import { deleteEfectivo } from '../../../controllers/controllersMetodoDePago/ctrEfectivo/DeleteEfectivo.js'; 

// Crear una nueva instancia de Router
const router = Router();

// Ruta para obtener todas los Efectivo
router.get('/Efectivo', getEfectivo);

// Ruta para obtener un solo Efectivo por ID
router.get('/Efectivo/:id', getEfectivoById);

// Ruta para crear un nuevo Efectivo
router.post('/Efectivo', createEfectivo);

// Ruta para eliminar un Efectivo
router.delete('/Efectivo/:id', deleteEfectivo);

// Exportar el router para que pueda ser utilizado en otros archivos
export default router;

