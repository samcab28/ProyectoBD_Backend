import app from './app.js';
import {getConnection} from './database/connection.js';

getConnection();

const PORT = process.env.PORT || 3001;
app.listen(PORT, () => {
    console.log(`Servidor iniciado en el puerto ${PORT}`);
});

console.log("servidor iniciado 2");
