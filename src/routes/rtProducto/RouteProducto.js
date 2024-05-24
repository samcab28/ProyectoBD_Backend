import { Router } from 'express';
import {getProductos, getProductoById} from "../../controllers/ctrProducto/ConsultProducto.js";
import {createProducto} from "../../controllers/ctrProducto/CreateProducto.js";
import {deleteProducto} from "../../controllers/ctrProducto/DeleteProducto.js";
import {updateProducto} from "../../controllers/ctrProducto/ModProducto.js";

const router = Router();

// Ruta para obtener todos los productos
router.get('/producto', getProductos);

// Ruta para obtener un solo producto por ID
router.get('/producto/:id', getProductoById);

// Ruta para crear un nuevo producto
router.post('/producto', createProducto);

// Ruta para modificar un producto existente por ID
router.put('/producto/:id', updateProducto);

// Ruta para borrar un producto existente por ID
router.delete('/producto/:id', deleteProducto);

export default router;
