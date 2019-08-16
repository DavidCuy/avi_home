const Users = require('../models/User');
const Home = require('../models/Home');
const Room = require('../models/Room');
const Category = require('../models/Category');
const Device = require('../models/Device');

/**
 * Metodo para obtener todos los Hogares
 * @param {*} root 
 * @param {*} args 
 */
const Homes = async(root, args) => {
    let userobj = await Users.findById(args.name);
    let homes = await Home.find({ user: userobj }).populate('user');
    return homes;
}

/**
 * Metodo para obtener todos los Cuartos
 * @param {*} root 
 * @param {*} args 
 */
const Rooms = async(root, args) => {
    let homeobj = await Home.findById(args.name);
    let rooms = await Room.find({ home: homeobj }).populate('home');
    for (let i = 0; i < rooms.length; i++) {
        const devices = await Device.find({ room: rooms[i]._id });
        rooms[i]._doc.devices = devices;
    }
    return rooms;
}

/**
 * Metodo para obtener todos los Dispositivos
 * @param {*} root 
 * @param {*} args 
 */
const Devices = async(root, args) => {
    let roomobj = await Room.findById(args.name);
    let devices = await Device.find({ room: roomobj }).populate('category').populate('room');
    return devices;
}

/**
 * Metodo para obtener todas las categorias
 * @param {*} root 
 * @param {*} args 
 */
const Categories = async(root, args) => {
    let categories = await Category.find();
    return categories;
}

/**
 * Metodo para obtener todos los usuarios
 * @param {*} root 
 * @param {*} args 
 */
const UsersList = async(root, args) => {
    let users = await Users.find();
    return users;
}

module.exports = {
    Homes,
    Rooms,
    Devices,
    Categories,
    UsersList
}