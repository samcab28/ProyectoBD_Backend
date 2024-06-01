import { Router } from 'express';
import { getTarjeta, getTarjetaById } from '../../../controllers/controllersMetodoDePago/ctrTarjeta/ConsultaTarjeta.js';
import { createTarjeta } from '../../../controllers/controllersMetodoDePago/ctrTarjeta/CreateTarjeta.js';
import { deleteTarjeta } from '../../../controllers/controllersMetodoDePago/ctrTarjeta/DeleteTarjeta.js';

// Crear una nueva instancia de Router
const router = Router();

// Ruta para obtener todas los Tarjeta
router.get('/Tarjeta', getTarjeta);

// Ruta para obtener un solo Tarjeta por ID
router.get('/Tarjeta/:id', getTarjetaById);

// Ruta para crear un nuevo Tarjeta
router.post('/Tarjeta', createTarjeta);

// Ruta para eliminar un Tarjeta
router.delete('/Tarjeta/:id', deleteTarjeta);

// Exportar el router para que pueda ser utilizado en otros archivos
export default router;

