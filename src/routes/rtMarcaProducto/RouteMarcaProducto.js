import { Router } from 'express';
import {getMarcaProducto, getMarcaProductoById} from "../../controllers/ctrMarcaProducto/ConsultMarcaProducto.js";
import {deleteMarcaProducto} from "../../controllers/ctrMarcaProducto/DeleteMarcaProducto.js";
import {createMarcaProducto} from "../../controllers/ctrMarcaProducto/CreateMarcaProducto.js";
import { updateMarcaProducto } from '../../controllers/ctrMarcaProducto/ModMarcaProducto.js';

const router = Router();

// Ruta para obtener todas las marcas de productos
router.get('/marcaProducto', getMarcaProducto);

// Ruta para obtener una sola marca de producto por ID
router.get('/marcaProducto/:id', getMarcaProductoById);

// Ruta para crear una nueva marca de producto
router.post('/marcaProducto', createMarcaProducto);

// Ruta para modificar una marca de producto existente por ID
router.put('/marcaProducto/:id', updateMarcaProducto);

// Ruta para borrar una marca de producto existente por ID
router.delete('/marcaProducto/:id', deleteMarcaProducto);

export default router;
