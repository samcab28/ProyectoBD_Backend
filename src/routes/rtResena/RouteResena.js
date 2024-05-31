import { Router } from 'express';
import {getResena, getResenaById} from "../../controllers/ctrResena/ConsultaResena.js";
import {DeleteResena} from "../../controllers/ctrResena/DeleteResena.js";
import {createResena} from "../../controllers/ctrResena/CreateResena.js";

// Crear una nueva instancia de Router
const router = Router();

// Ruta para obtener todas las personas
router.get('/resena', getResena);

// Ruta para obtener una sola persona por ID
router.get('/resena/:id', getResenaById);

// Ruta para crear una nueva persona
router.post('/resena', createResena);

// Ruta para modificar una persona existente por ID
//router.put('/resena/:id', );

// Ruta para borrar una persona existente por ID
router.delete('/resena/:id', DeleteResena);

// Exportar el router para que pueda ser utilizado en otros archivos
export default router;
