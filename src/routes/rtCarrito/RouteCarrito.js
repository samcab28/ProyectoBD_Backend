import { Router } from 'express';
import { getCarritoByUser } from '../../controllers/ctrCarrito/CarritoConsultaPorUsuario.js';
import { createCarrito } from '../../controllers/ctrCarrito/CarritoCrear.js';
import { deleteCarrito } from '../../controllers/ctrCarrito/CarritoEliminar.js';
import { modifyCarritoQuantity } from '../../controllers/ctrCarrito/CarritoModificarCantidad.js';

// Definir un router para carrito
const router = Router();

// Ruta para obtener carrito por id de usuario 
router.get('/carrito/:idPersona', getCarritoByUser);

// Ruta para crear un carrito
router.post('/carrito', createCarrito);

// Ruta para modificar la cantidad de un carrito
router.put('/carrito/:idCarrito/:nuevaCantidad', modifyCarritoQuantity);

// Ruta para eliminar un carrito
router.delete('/carrito/:idCarrito', deleteCarrito);

// Exportar el router de carrito
export default router;
