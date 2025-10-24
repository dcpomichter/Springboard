const User = require('../models/User');
const Dog = require('../models/Dog')
const jwt = require('jsonwebtoken');
require('dotenv-flow').config();

//handleErrors
const handleErrors = (err) => {
    let errors = { username: '', email: '', password: '' }
    console.log(err)
    //incorrect email
    if (err.message === 'incorrect email') {
        errors.email = 'that email is not registered'
    }

    //incorrect password
    if (err.message === 'incorrect password') {
        errors.password = 'that password is incorrect'
    }

    //duplicate error code
    if (err.code === 11000) {
        errors.email = 'that email or username is already registered'
        return errors
    }
    //validation errors
    if (err.message.includes('user validation failed')) {
        Object.values(err.errors).forEach(({ properties }) => {
            errors[properties.path] = properties.message
        })
    }

    return errors
}

//create token
const maxAge = 24 * 60 * 60;
const createToken = (id) => {
    return jwt.sign({ id }, process.env.JWT_SECRET, {
        expiresIn: maxAge
    })
}
module.exports.register_get = (req, res) => {
    res.render('register', {title: 'Register User'})
}

module.exports.register_post = async (req, res) => {
    const { username, email, password } = req.body
    try {
        const user = await User.create({
            username,
            email,
            password
        })
        const token = createToken(user._id)
        res.cookie('jwt', token, { httpOnly: true, maxAge: maxAge * 1000 })
        res.status(201).json({ user: user._id })
    }
    catch (err) {
        const errors = handleErrors(err)
        res.status(400).json({ errors })
    }
}

module.exports.login_get = (req, res) => {
    res.render('login', { title: 'Login' })
}

module.exports.login_post = async (req, res) => {
    const { email, password } = req.body
    try {
        const user = await User.login(email, password)
        const token = createToken(user._id)
        res.cookie('jwt', token, { httpOnly: true, maxAge: maxAge * 1000 })
        res.status(200).json({ user: user._id })
    }
    catch (err) {
        const errors = handleErrors(err)
        res.status(400).json({ errors })
    }
}

module.exports.logout_get = (req, res) => {
    res.cookie('jwt', '', { httpOnly: true, maxAge: 1 })
    res.redirect('/')
}

module.exports.user_details = async (req, res) => {
    const id = req.params.id
    let adoptedDogs = []
    let registeredDogs = []

    try {
        const user = await User.findById(id)
    for (const dog of user.adopteddogs){
        const dogDetails = await Dog.findById(dog)
        adoptedDogs.push(dogDetails)
        }
    for (const dog of user.registereddogs) {
        const dogDetails = await Dog.findById(dog)
        registeredDogs.push(dogDetails)
    }
    res.render('user', { title: 'User Page', dogs: adoptedDogs, register: registeredDogs })
            }
    catch (err) {
        const errors = handleErrors(err)
        res.status(400).json({ errors })
    }
    }
