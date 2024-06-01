import { Router } from 'express';
import { getDivisa, getDivisaById } from '../../controllers/ctrDivisa/ConsultaDivisa.js';
import { deleteDivisa } from "../../controllers/ctrDivisa/DeleteDivisa.js";
import {createDivisa} from "../../controllers/ctrDivisa/CreateDivisa.js"
import {updateDivisa} from "../../controllers/ctrDivisa/ModDivisa.js";

// Crear una nueva instancia de Router
const router = Router();

// Ruta para obtener todas las divisas
router.get('/divisa', getDivisa);

// Ruta para obtener una sola divisa por ID
router.get('/divisa/:id', getDivisaById);

// Ruta para crear una nueva divisa
router.post('/divisa', createDivisa);

// Ruta para modificar una divisa existente por ID
router.put('/divisa/:id', updateDivisa);

// Ruta para borrar una divisa existente por ID
router.delete('/divisa/:id', deleteDivisa);

// Exportar el router para que pueda ser utilizado en otros archivos
export default router;