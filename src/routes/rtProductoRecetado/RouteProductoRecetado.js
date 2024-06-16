import { Router } from 'express';
import { getProductoRecetado, getProductoRecetadoById, getProductosRecetadosPorCita } from '../../controllers/ctrProductoRecetado/ConsultaProductoRecetado.js';
import { deleteProductoRecetado } from "../../controllers/ctrProductoRecetado/DeleteProductoRecetado.js";
import { createProductoRecetado } from "../../controllers/ctrProductoRecetado/CreateProductoRecetado.js"
import { updateProductoRecetado } from "../../controllers/ctrProductoRecetado/ModProductoRecetado.js";

// Crear una nueva instancia de Router
const router = Router();

// Ruta para obtener todas las productos recetados
router.get('/ProductoRecetado', getProductoRecetado);

// Ruta para obtener una sola producto recetado por ID
router.get('/ProductoRecetado/:id', getProductoRecetadoById);

// Ruta para obtener productos recetados por cita
router.get('/productosRecetados/:idCita', getProductosRecetadosPorCita);

// Ruta para crear una nueva producto recetado
router.post('/ProductoRecetado', createProductoRecetado);

// Ruta para modificar una producto recetado existente por ID
router.put('/ProductoRecetado/:id', updateProductoRecetado);

// Ruta para borrar una producto recetado existente por ID
router.delete('/ProductoRecetado/:id', deleteProductoRecetado);

// Exportar el router para que pueda ser utilizado en otros archivos
export default router;