require('dotenv').config();

module.exports={
    development: {
        username: 'root',
        password: process.env.SEQUELIZE_PASSWORD,
        database: 'nodebird',
        host: 'nodebird-deploy.cfxpbrcvyj8n.ap-northeast-2.rds.amazonaws.com',
        dialect: 'mysql',
    },
    test: {
        username: 'root',
        password: process.env.SEQUELIZE_PASSWORD,
        database: 'nodebird',
        host: 'nodebird-deploy.cfxpbrcvyj8n.ap-northeast-2.rds.amazonaws.com',
        dialect: 'mysql',
    },
    production: {
        username: 'root',
        password: process.env.SEQUELIZE_PASSWORD,
        database: 'nodebird',
        host: 'nodebird-deploy.cfxpbrcvyj8n.ap-northeast-2.rds.amazonaws.com',
        dialect: 'mysql',
        logging: false,
    },
};