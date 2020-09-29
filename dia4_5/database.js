const { Sequelize } = require('sequelize');
const sequelize = new Sequelize('sqlite::memory:'); // Example for sqlite

(async () => {
    await sequelize.authenticate();
    console.log("Connection OK!");
})();

module.exports = sequelize;