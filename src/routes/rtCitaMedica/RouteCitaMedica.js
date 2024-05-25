import { Router } from 'express';
import { getCitaMedica, getCitaMedicaById } from '../../controllers/ctrCitaMedica/ConsultaCitaMedica.js';
import { deleteCitaMedica } from "../../controllers/ctrCitaMedica/DeleteCitaMedica.js";
import { createCitaMedica } from "../../controllers/ctrCitaMedica/CreateCitaMedica.js"
import { updateCitaMedica } from "../../controllers/ctrCitaMedica/ModCitaMedica.js";

// Crear una nueva instancia de Router
const router = Router();

// Ruta para obtener todas las citas médicas
router.get('/citaMedica', getCitaMedica);

// Ruta para obtener una sola cita médica por ID
router.get('/citaMedica/:id', getCitaMedicaById);

// Ruta para crear una nueva cita médica
router.post('/citaMedica', createCitaMedica);

// Ruta para modificar una cita médica existente por ID
router.put('/citaMedica/:id', updateCitaMedica);

// Ruta para borrar una cita médica existente por ID
router.delete('/citaMedica/:id', deleteCitaMedica);

// Exportar el router para que pueda ser utilizado en otros archivos
export default router;
