import { Router } from 'express';
import {getSucursal, getSucursalById} from "../../controllers/ctrSucursal/ConsultSucursal.js";
import {createSucursal} from "../../controllers/ctrSucursal/CreateSucursal.js";
import {deleteSucursal} from "../../controllers/ctrSucursal/DeleteSucursal.js";
import {updateSucursal} from "../../controllers/ctrSucursal/ModSucursal.js";


// Crear una nueva instancia de Router
const router = Router();

// Ruta para obtener todas las sucursales
router.get('/sucursal', getSucursal);

// Ruta para obtener una sola sucursal por ID
router.get('/sucursal/:id', getSucursalById);

// Ruta para crear una nueva sucursal
router.post('/sucursal', createSucursal);

// Ruta para modificar una sucursal existente por ID
router.put('/sucursal/:id', updateSucursal);

// Ruta para borrar una sucursal existente por ID
router.delete('/sucursal/:id', deleteSucursal);

// Exportar el router para que pueda ser utilizado en otros archivos
export default router;
