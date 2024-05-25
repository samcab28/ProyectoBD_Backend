import { Router } from 'express';
import { getServicioPredeterminado, getServicioPredeterminadoById } from '../../controllers/ctrServicioPredeterminado/ConsultaServicioPredeterminado.js';
import { deleteServicioPredeterminado } from "../../controllers/ctrServicioPredeterminado/DeleteServicioPredeterminado.js";
import {createServicioPredeterminado} from "../../controllers/ctrServicioPredeterminado/CreateServicioPredeterminado.js"
import {updateServicioPredeterminado} from "../../controllers/ctrServicioPredeterminado/ModServicioPredeterminado.js";

// Crear una nueva instancia de Router
const router = Router();

// Ruta para obtener todas los servicios predeterminados
router.get('/servicioPredeterminado', getServicioPredeterminado);

// Ruta para obtener un solo servicio predeterminado por ID
router.get('/servicioPredeterminado/:id', getServicioPredeterminadoById);

// Ruta para crear un nuevo servicio predeterminado
router.post('/servicioPredeterminado', createServicioPredeterminado);

// Ruta para modificar un servicio predeterminado existente por ID
router.put('/servicioPredeterminado/:id', updateServicioPredeterminado);

// Ruta para borrar un servicio predeterminado existente por ID
router.delete('/servicioPredeterminado/:id', deleteServicioPredeterminado);

// Exportar el router para que pueda ser utilizado en otros archivos
export default router;
