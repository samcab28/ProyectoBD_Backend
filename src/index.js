import app from './app.js';
import cors from 'cors';import { getConnection } from './database/connection.js';

// Llamada a la función de conexión a la base de datos
getConnection();

// Puerto en el que se ejecuta tu servidor
const PORT = process.env.PORT || 3001;
<<<<<<< Updated upstream
app.listen(PORT);
=======
>>>>>>> Stashed changes

// Iniciar el servidor
app.listen(PORT, () => {
    console.log(`Servidor backend corriendo en http://localhost:${PORT}`);
});
