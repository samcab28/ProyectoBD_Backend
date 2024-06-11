import { Router } from 'express';
import {getMedicamentos, getMedicamentoById, getPMedicamentoBySucursal} from "../../controllers/ctrMedicamento/ConsultMedicamento.js";
import {createMedicamento} from "../../controllers/ctrMedicamento/CreateMedicamento.js";
import {updateMedicamento} from "../../controllers/ctrMedicamento/ModMedicamento.js";
import {deleteMedicamento} from "../../controllers/ctrMedicamento/DeleteMedicamento.js";

const router = Router();

// Ruta para obtener todos los medicamentos
router.get('/medicamento', getMedicamentos);

// Ruta para obtener un solo medicamento por ID
router.get('/medicamento/:id', getMedicamentoById);

//ruta para medicamentos segun sucursal
router.get('/medicamento/sucursal/:id', getPMedicamentoBySucursal);

// Ruta para crear un nuevo medicamento
router.post('/medicamento', createMedicamento);

// Ruta para modificar un medicamento existente por ID
router.put('/medicamento/:id', updateMedicamento);

// Ruta para borrar un medicamento existente por ID
router.delete('/medicamento/:id', deleteMedicamento);

export default router;
