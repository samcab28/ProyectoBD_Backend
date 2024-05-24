import { Router } from 'express';
import {getAnimal, getAnimalById} from "../../controllers/ctrAnimal/ConsultAnimal.js";
import {createAnimal} from "../../controllers/ctrAnimal/CreateAnimal.js";
import {deleteAnimal} from "../../controllers/ctrAnimal/DeleteAnimal.js";


const router = Router();

// Ruta para obtener todos los animales
router.get('/animal', getAnimal);

// Ruta para obtener un solo animal por ID
router.get('/animal/:id', getAnimalById);

// Ruta para crear un nuevo animal
router.post('/animal', createAnimal);

// Ruta para modificar un animal existente por ID
//router.put('/animal/:id', updateAnimal);

// Ruta para borrar un animal existente por ID
router.delete('/animal/:id', deleteAnimal);

export default router;
