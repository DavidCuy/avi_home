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

const createHome = async (root, args) => {
    let newHome = new Home({
        name: args.data.name,
        location: args.data.location,
        createdAt: args.data.createdAt,
        user: args.data.user
    });
    const myHome = await newHome.save();
    const home = await Home.find({_id:myHome._id}).populate('user');

    return home;
}

const createRoom = async (root, args) => {
    let newRoom = new Room({
        name: args.data.category,
        createdAt: args.data.createdAt,
        home: args.data.home
    });
    const myRoom = await newRoom.save();
    const room = await Room.find({_id:myRoom._id}).populate('home');

    return room;
}
  
const createCategory = async (root, args) => {
    let newCategory = new Category({
        name: args.data.name,
        description: args.data.description,
        createdAt: args.data.createdAt
    });
    const category = await newCategory.save();

    return category;
}

const createDevice = async (root, args) => {
    let newDevice = new Device({
        name: args.data.name,
        createdAt: args.data.createdAt,
        value: args.data.value,
        category: args.data.category,
        room: args.data.room
    });
    const myDevice = await newDevice.save();
    const device = await Device.find({_id:myDevice._id}).populate('category').populate('room');

    return device;
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
    createHome,
    createRoom,
    createCategory,
    createDevice,
    login
}
