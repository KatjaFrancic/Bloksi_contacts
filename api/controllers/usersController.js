const User = require('../models/user');
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');

async function register (req, res) {
    try {
    // get the username and password off req body
    const {username, password} = req.body;

    // hash password
    const hashedPassword = bcrypt.hashSync(password, 8);

    // check if username already exists
    const findUser = await User.findOne({username})
    if (findUser)
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

async function login (req, res) {
    // get the username and password off req body
    const {username, password} = req.body;

    // find user with the username
    const user = await User.findOne({username: username });
    if (!user)
        return res.sendStatus(401);

    // compare sent in password with found user password hash
    const passwordMatch = bcrypt.compareSync(password, user.password);
    if (!passwordMatch)
        return res.sendStatus(401);

    // create a jwt token
    const exp = Date.now() + 1000 * 60 * 60 * 24 * 30;
    const token = jwt.sign({ sub: user._id, exp}, process.env.SECRET);

    // set the cookie
    res.cookie("Authorization", token, {
        expires: new Date(exp),
        httpOnly: true,
        sameSite: 'lax',
        secure: process.env.NODE_ENV === 'production',
    });

    // send the jwt token
    res.sendStatus(200);
}

function logout (req, res) {

}

function checkAuth (req, res) {
    console.log(req.user);
    res.sendStatus(200);
}

module.exports = {
    register,
    login,
    logout,
    checkAuth,
};