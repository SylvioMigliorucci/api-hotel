require('../bootstrap');

module.exports = {
    dialect: process.env.DB_DIALECT || 'mysql',
    host: process.env.DB_HOST,
    database: process.env.DB_NAME,
    port: process.env.DB_PORT,
    username: process.env.DB_USER,
    password: process.env.DB_PASS,
    storage: './__tests__/database.sqlite',
    logging: false,
    define: {
        timestamps: true,
        underscored: true,
        underscoredAll: true,
    },
};
