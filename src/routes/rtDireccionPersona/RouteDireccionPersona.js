import { Router } from 'express';
import {getDireccionPersonaByIdDir, getDireccionPersonaByIdPer, getDireccionPersona} from "../../controllers/ctrDireccionPersona/ConsultaDireccionPersona.js";
import {createDireccion} from "../../controllers/ctrDireccionPersona/CreateDireccionPersona.js";
import {deleteDireccionPersona} from "../../controllers/ctrDireccionPersona/DeleteDireccionPersona.js";

const router = Router();

// Ruta para obtener todas las mascotas
router.get('/dirPersona', getDireccionPersona);

//detalles mascota
router.get('/dirPersona/:id', getDireccionPersonaByIdDir);

// Ruta para obtener las dirreciones de una persona por id persona 
router.get('/dirPersonaByPer/:id', getDireccionPersonaByIdPer);

// Ruta para crear una nueva DirrecionPersona
router.post('/dirPersona', createDireccion);

// Ruta para borrar una mascota existente por ID
router.delete('/dirPersona/:id', deleteDireccionPersona);

export default router;
