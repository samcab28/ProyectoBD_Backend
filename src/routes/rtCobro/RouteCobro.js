import { Router } from 'express';
import { getCobro , getCobroById } from '../../controllers/ctrCobro/ConsultaCobro.js'; 
import { deleteCobro } from "../../controllers/ctrCobro/DeleteCobro.js";
import { createCobro } from "../../controllers/ctrCobro/CreateCobro.js"; 
import { updateCobro } from "../../controllers/ctrCobro/ModCobro.js";

// Crear una nueva instancia de Router
const router = Router();

// Ruta para obtener todas los cobros
router.get('/cobro', getCobro);

// Ruta para obtener un solo cobro por ID
router.get('/cobro/:id', getCobroById);

// Ruta para crear un nuevo cobro
router.post('/cobro', createCobro);

// Ruta para modificar un cobro existente por ID
router.put('/cobro/:id', updateCobro);

// Ruta para borrar un cobro existente por ID
router.delete('/cobro/:id', deleteCobro);

// Exportar el router para que pueda ser utilizado en otros archivos
export default router;


