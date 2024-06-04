import { Router } from 'express';
import { getInformacionTarjetaPorPersona } from '../../controllers/ctrInformacionTarjeta/ConsultaInfoTarjeta.js';
import { createInformacionTarjeta } from '../../controllers/ctrInformacionTarjeta/CreateInfoTarjeta.js';
import { deleteInformacionTarjeta } from '../../controllers/ctrInformacionTarjeta/DeleteInfoTarjeta.js';

// Crear una nueva instancia de Router
const router = Router();

// Ruta para obtener información de tarjeta por IdPersona
router.get('/infoTarjeta/:IdPersona', getInformacionTarjetaPorPersona);

// Ruta para crear un nuevo registro de InformacionTarjeta
router.post('/infoTarjeta', createInformacionTarjeta);

// Ruta para eliminar (marcar como no vigente) un registro de InformacionTarjeta
router.delete('/infoTarjeta/:IdInformacionTarjeta', deleteInformacionTarjeta);

// Exportar el router para que pueda ser utilizado en otros archivos
export default router;
