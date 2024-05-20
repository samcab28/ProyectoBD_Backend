import sql from 'mssql';

const dbSettings = {
    user: "Admin",
    password: "luis",
    server: "localhost",
    database: "Proyecto2Bd_2024",
    options:{
        encrypt: false,
        trustServerCertificate: true,
    }
}

export const getConnection = async() => {
    try{
        const pool = await sql.connect(dbSettings);

        const result = await pool.request().query("SELECT GETDATE()")
        console.log(result);
        console.log("conexion correcta de base de datos")
        return pool;
    }
    catch(error){
        console.error("error en conexion a la base de datos")
    }
}

