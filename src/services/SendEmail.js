// src/services/SendEmail.js
import nodemailer from 'nodemailer';

const transporter = nodemailer.createTransport({
  service: 'gmail',
  auth: {
    user: 'Luisgerardourbsalz@gmail.com', // dirección de correo electrónico de Gmail
    pass: 'mtwg lpog jssp ujni' // contraseña de aplicación
  }
});

// Función para enviar correos electrónicos
export function enviarCorreos(listaCorreos, asunto, mensaje) {
  // Configurar los detalles del correo electrónico
  const mailOptions = {
    from: 'Luisgerardourbsalz@gmail.com', // Tu dirección de correo electrónico de Gmail
    to: listaCorreos.join(','),
    subject: asunto,
    text: mensaje
  };

  // Envía el correo electrónico
  transporter.sendMail(mailOptions, (error, info) => {
    if (error) {
      console.log('Error al enviar el correo:', error);
    } else {
      console.log('Correo electrónico enviado:', info.response);
    }
  });
}
