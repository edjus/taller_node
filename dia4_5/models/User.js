const { DataTypes, Model } = require('sequelize');
const sequelize = require('../database');

class User extends Model {}

User.init({
  // Model attributes are defined here
  nombre: {
    type: DataTypes.STRING,
    allowNull: false
  },
  apellido: {
    type: DataTypes.STRING,
    allowNull: false
  },
}, {
  // Other model options go here
  sequelize, // We need to pass the connection instance
  modelName: 'User', // We need to choose the model name
  tableName: 'users'
});

(async () => {
  await User.sync(); // Crea la tabla si no existe
  User.bulkCreate([
    { nombre: "Fran", apellido: "Gómez" },
    { nombre: "Coty", apellido: "Gonzáles" },
    { nombre: "Gastón", apellido: "Goffredo" }
  ]);

})();

module.exports = User;