import app from './app.js';
import { getConnection } from './database/connection.js';

// Llamada a la función de conexión a la base de datos
getConnection();

const PORT = 3001;

// Iniciar el servidor
app.listen(PORT, () => {
    console.log(`Servidor backend corriendo en http://localhost:${PORT}`);
});
