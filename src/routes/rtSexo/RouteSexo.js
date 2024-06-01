import { Router } from 'express';
import { getSexo, getSexoById } from '../../controllers/ctrSexo/ConsultaSexo.js';

// Crear una nueva instancia de Router
const router = Router();

// Ruta para obtener todas los sexos
router.get('/sexo', getSexo);

// Ruta para obtener un solo sexo por ID
router.get('/sexo/:id', getSexoById);

// Exportar el router para que pueda ser utilizado en otros archivos
export default router;
