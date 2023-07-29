import Sequelize from "sequelize";

const connection = new Sequelize('guiapress', 'root', 'mypassword', {
    host: 'localhost',
    dialect: 'mysql',
    logging: false
});

export default connection;