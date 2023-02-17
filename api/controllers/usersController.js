const User = require('../models/user');
const bcrypt = require('bcryptjs');

async function register (req, res) {
    try {
    // get the username and password off req body
    const {username, password} = req.body;

    // hash password
    const hashedPassword = bcrypt.hashSync(password, 8);

    // check if username already exists
    const najdiUser = await User.findOne({username})
    if (najdiUser)
        res.sendStatus(400);

    // create new user with the data
    else {
        await User.create({username, password: hashedPassword});
        res.sendStatus(200);
    }

    } catch(err) {
        console.log(err)
        res.sendStatus(400);
    }

}

function login (req, res) {

}

function logout (req, res) {

}

module.exports = {
    register,
    login,
    logout,
};