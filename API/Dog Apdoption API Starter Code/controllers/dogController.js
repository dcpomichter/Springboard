const Dog = require('../models/Dog')

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

module.exports.dogs_get = (req, res) => {
    res.render('register-dog')
}

module.exports.dog_post = async (req, res) => {
    const { name, description } = req.body
    try {
        const dog = await Dog.create({
            name,
            postedby,
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
