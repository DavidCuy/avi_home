const Users = require('../models/User');
const Home = require('../models/Home');
const Room = require('../models/Room');
const Category = require('../models/Category');
const Device = require('../models/Device');
const authenticated = require('../utils/authenticated');


const createUsers = async (root, args) => {
    let newUser = new Users({
        ...args.data
    });
    const myUser = await newUser.save();
    return myUser;
}
  
const login = async(root, args) => {
    const token = await authenticated(args).catch((err) => {
        return err.message
    });

    return {
        token,
        message: 'OK'
    };
}

module.exports = {
    createUsers,
    login
}
