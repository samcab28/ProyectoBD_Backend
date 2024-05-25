import { Router } from 'express';
import { getTipoMedicamento, getTipoMedicamentoById } from '../../controllers/ctrTipoDe/ConsultaTipoMedicamento.js';
import { deleteTipoMedicamento } from "../../controllers/controllersTipoDe/ctrTipoMedicamento/DeleteTipoMedicamento.js";
import { createTipoMedicamento } from "../../controllers/controllersTipoDe/ctrTipoMedicamento/CreateTipoMedicamento.js"
import { updateTipoMedicamento } from "../../controllers/controllersTipoDe/ctrTipoMedicamento/ModTipoMedicamento.js";

// Crear una nueva instancia de Router
const router = Router();

// Ruta para obtener todas las tipos de medicamento
router.get('/tipoMedicamento', getTipoMedicamento);

// Ruta para obtener una sola tipo de medicamento por ID
router.get('/tipoMedicamento/:id', getTipoMedicamentoById);

// Ruta para crear una nueva tipo de medicamento
router.post('/tipoMedicamento', createTipoMedicamento);

// Ruta para modificar una tipo de medicamento existente por ID
router.put('/tipoMedicamento/:id', updateTipoMedicamento);

// Ruta para borrar una tipo de medicamento existente por ID
router.delete('/tipoMedicamento/:id', deleteTipoMedicamento);

// Exportar el router para que pueda ser utilizado en otros archivos
export default router;

