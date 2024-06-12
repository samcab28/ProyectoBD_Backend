// connection.js

import sql from 'mssql';
import { createRequire } from 'module';
const require = createRequire(import.meta.url);
const cron = require('node-cron');
import { fileURLToPath } from 'url';
import { dirname } from 'path';

// Obtener la ruta del directorio actual
const currentDir = dirname(fileURLToPath(import.meta.url));

const dbSettings = {
    user: "esteban",
    password: "esteban",
    server: "localhost",   // Cambiar ip real al momento con samir
    database: "DB",
    options:{
        encrypt: false,
        trustServerCertificate: true,
    }
}


export const getConnection = async () => {
    try {
        const pool = await sql.connect(dbSettings);
        console.log("Conexión exitosa a la base de datos");
        return pool;
    } catch (error) {
        console.error("Error en la conexión a la base de datos:", error);
    }
};

export const scheduleBackup = () => {
    cron.schedule('30 23 * * *', async () => { // Ejecutar a las 10:41 PM todos los días
        try {
            const pool = await sql.connect(dbSettings);
            const backupPath = `C:\Users\Victor Azofeifa\Downloads\\backup_${new Date().toISOString().replace(/[:.]/g, '-')}.bak`;
            const query = `BACKUP DATABASE ${dbSettings.database} TO DISK = '${backupPath}'`;
            await pool.request().query(query);
            console.log("Backup realizado con éxito en:", backupPath);
        } catch (error) {
            console.error("Error al realizar el backup:", error);
        }
    }, {
        scheduled: true,
        timezone: "America/Costa_Rica" // Cambia a tu zona horaria
    });
};
