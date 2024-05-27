import { Router } from 'express';
import { getSinpe, getSinpeById } from '../../../controllers/controllersMetodoDePago/ctrSinpe/ConsultaSinpe.js';
import { createSinpe } from '../../../controllers/controllersMetodoDePago/ctrSinpe/CreateSinpe.js';
import { deleteSinpe } from '../../../controllers/controllersMetodoDePago/ctrSinpe/DeleteSinpe.js';

// Crear una nueva instancia de Router
const router = Router();

// Ruta para obtener todas los Sinpe
router.get('/Sinpe', getSinpe);

// Ruta para obtener un solo Sinpe por ID
router.get('/Sinpe/:id', getSinpeById);

// Ruta para crear un nuevo Sinpe
router.post('/Sinpe', createSinpe);

// Ruta para eliminar un Sinpe
router.delete('/Sinpe/:id', deleteSinpe);

// Exportar el router para que pueda ser utilizado en otros archivos
export default router;
