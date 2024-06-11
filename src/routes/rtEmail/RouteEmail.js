// src/routes/rtEmail/RouteEmail.js
import { Router } from 'express';
import { emailController } from "../../controllers/ctrEmail/emailController.js";

// Crear una nueva instancia de Router
const router = Router();

// Ruta para enviar correos electrónicos
router.post('/enviarCorreo', emailController);

// Exportar el router para que pueda ser utilizado en otros archivos
export default router;
