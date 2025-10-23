const Dog = require('../models/Dog')
const {checkUser} = require('../middleware/authMiddleware')

const handleErrors = (err) => {
    let errors = { name: '', description: '' }

    //validation errors
    if (err.message.includes('user validation failed')) {
        Object.values(err.errors).forEach(({ properties }) => {
            errors[properties.path] = properties.message
        })
    }

    return errors
}

module.exports.adoption_get = (req, res) => {
    Dog.find()
        .then((result) => {
            res.render('adoption', { title: "All Dogs", dogs: result })
        })
        .catch((err) => {
            console.log(err)
        })
}

module.exports.dogs_get = (req, res) => {
    res.render('register-dog')
}

module.exports.dog_post = async (req, res) => {
    const { name, description } = req.body
    const id = req.userData
    try {
        const dog = await Dog.create({
            name,
            postedby: id,
            description,
            adoptionstatus
        })
        res.status(201).json({ dog: dog._id })
    }
    catch (err) {
        const errors = handleErrors(err)
        res.status(400).json({ errors })
    }
}
