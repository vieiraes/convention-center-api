require('dotenv').config();

const envs = {
    port: process.env.PORT || 3000,
    
    db_user: process.env.DB_USER,
    db_pass: process.env.DB_PASSWORD,
    db_host: process.env.DB_HOST,
    db_port: process.env.DB_PORT,
    db_name: process.env.DB_NAME
}



module.exports = envs