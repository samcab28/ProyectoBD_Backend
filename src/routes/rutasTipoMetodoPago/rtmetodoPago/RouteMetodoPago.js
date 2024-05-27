import { Router } from 'express';
import { getMetodoPago, getMetodoPagoById } from '../../../controllers/controllersMetodoDePago/ctrMetodoPago/ConsultaMetodoPago.js'

// Crear una nueva instancia de Router
const router = Router();

// Ruta para obtener todas los MetodoPago
router.get('/metodoPago', getMetodoPago);

// Ruta para obtener un solo MetodoPago por ID
router.get('/metodoPago/:id', getMetodoPagoById);

// Exportar el router para que pueda ser utilizado en otros archivos
export default router;
