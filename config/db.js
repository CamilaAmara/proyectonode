import Sequelize from 'sequelize';
// Nota: Si usas dotenv para pruebas locales, asegúrate de importarlo/configurarlo aquí 
// si no lo has hecho en index.js.

const db = new Sequelize(
    // 1. Nombre de la base de datos (DB_NAME en Render: 'railway')
    process.env.DB_NAME, 
    
    // 2. Usuario (DB_USER en Render: 'root')
    process.env.DB_USER, 
    
    // 3. Contraseña (DB_PASSWORD en Render: Tu contraseña larga)
    process.env.DB_PASSWORD, 
    {
        // 4. Host (DB_HOST en Render: 'maglev.proxy.rlwy.net')
        host: process.env.DB_HOST,   
        
        // 5. Puerto (DB_PORT en Render: 33544)
        port: process.env.DB_PORT,   
        
        dialect: 'mysql',            
        define: {
            timestamps: false
        },
        pool: {
            max: 5,
            min: 0,
            acquire: 30000,
            idle: 10000
        },
        // 'operatorAliases: false' es la configuración predeterminada en versiones modernas,
        // pero puedes dejarlo si lo necesitas.
        // operatorAliases: false 

        // Si usas MySQL en Railway, es posible que el operador necesite una configuración SSL:
        // dialectOptions: {
        //     ssl: {
        //         rejectUnauthorized: false
        //     }
        // }
    }
);

export default db;
