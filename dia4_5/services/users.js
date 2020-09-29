const UsersDAO = require('../daos/users');

class UsersService { // Clase estática
    
    static async getUsers() {
        let users = await UsersDAO.getUsers();
        return users;
    }

    static async getUserById(id) {
        let user = await UsersDAO.getUserById(id);
        return user;
    }

    static async getUserByName(name) {
        let user = await UsersDAO.getUserByName(name);
        return user;
    }

    static async save(user) {
        const userCreated = await UsersDAO.save(user);
        return userCreated;
    }

}

module.exports = UsersService;