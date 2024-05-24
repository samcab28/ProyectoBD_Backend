import { Router } from 'express';
import {getMascota, getMascotaById} from "../../controllers/ctrMascota/ConsultMascota.js";
import {createMascota} from "../../controllers/ctrMascota/CreateMascota.js";
import {deleteMascota} from "../../controllers/ctrMascota/DelteMascota.js";
import {updateMascota} from "../../controllers/ctrMascota/ModMascota.js";

// Crear una nueva instancia de Router
const router = Router();

// Ruta para obtener todas las mascotas
router.get('/mascota', getMascota);

// Ruta para obtener una sola mascota por ID
router.get('/mascota/:id', getMascotaById);

// Ruta para crear una nueva mascota
router.post('/mascota', createMascota);

// Ruta para modificar una mascota existente por ID
router.put('/mascota/:id', updateMascota);

// Ruta para borrar una mascota existente por ID
router.delete('/mascota/:id', deleteMascota);

// Exportar el router para que pueda ser utilizado en otros archivos
export default router;
