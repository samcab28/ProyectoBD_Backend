import { Router } from 'express';
import { getHistorialPreferencia, getHistorialPreferenciaById } from '../../controllers/ctrHistorialPreferencia/ConsultaHistorialPreferencia.js';
import { deleteHistorialPreferencia } from "../../controllers/ctrHistorialPreferencia/DeleteHistorialPreferencia.js";
import {createHistorialPreferencia} from "../../controllers/ctrHistorialPreferencia/CreateHistorialPreferencia.js"
import {updateHistorialPreferencia} from "../../controllers/ctrHistorialPreferencia/ModHistorialPreferencia.js";

// Crear una nueva instancia de Router
const router = Router();

// Ruta para obtener todas las HistorialPreferencia
router.get('/historialpreferencia', getHistorialPreferencia);

// Ruta para obtener una sola HistorialPreferencia por ID
router.get('/historialpreferencia/:id', getHistorialPreferenciaById);

// Ruta para crear una nueva HistorialPreferencia
router.post('/historialpreferencia', createHistorialPreferencia);

// Ruta para modificar una HistorialPreferencia existente por ID
router.put('/historialpreferencia/:id', updateHistorialPreferencia);

// Ruta para borrar una HistorialPreferencia existente por ID
router.delete('/historialpreferencia/:id', deleteHistorialPreferencia);

// Exportar el router para que pueda ser utilizado en otros archivos
export default router;
