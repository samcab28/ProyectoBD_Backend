// src/controllers/ctrEmail/emailController.js
import { enviarCorreos } from '../../services/SendEmail.js';

export const emailController = async (req, res) => {
  const { correos, asunto, mensaje } = req.body;

  try {
    const response = await enviarCorreos(correos, asunto, mensaje);
    res.status(200).json({ message: 'Correo electrónico enviado', response });
  } catch (error) {
    res.status(500).json({ message: 'Error al enviar el correo', error });
  }
}
