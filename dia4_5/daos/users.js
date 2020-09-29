const UserModel = require('../models/User');

class UsersDAO {
    static async getUsers() {
        let users = await UserModel.findAll();
        return users;
    }

    static async getUserById(id) {
        let user = await UserModel.findAll({ where: { id }});
        return user;
    }

    static async getUserByName(name) {
        let user = await UserModel.findAll({ where: { nombre: name }});
        return user;
    }

    static async save(user) {
        const userCreated = await UserModel.create(user);
        return userCreated;
    }
}

module.exports = UsersDAO;