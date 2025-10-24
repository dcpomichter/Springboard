const Dog = require('../models/Dog')
const User = require('../models/User')
const {checkUser} = require('../middleware/authMiddleware')

const handleErrors = (err) => {
    let errors = { name: '', description: '' }

    console.log(err)

    //validation errors
    if (err.message.includes('dog validation failed')) {
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
                const errors = handleErrors(err)
                res.status(400).json({ errors })
        })
}

module.exports.dogs_get = (req, res) => {
    res.render('register-dog', { title: 'Register New Dog' })
}

module.exports.dog_post = async (req, res) => {
    const { name, description } = req.body
    const id = req.userData
    try {
        const dog = await Dog.create({
            name,
            description,
            postedby: id
        })
        const user = await User.findByIdAndUpdate(id, { $push: { registereddogs: dog._id.toString() }})
        res.status(201).json({ dog: dog._id })
    }
    catch (err) {
        const errors = handleErrors(err)
        res.status(400).json({ errors })
    }
}

module.exports.dog_details = (req, res) => {
    const id = req.params.id
    Dog.findById(id)
    .then(async (result) => {
        const human = await User.findById(result.postedby)
        res.render('dog-details', {title: "Dog Details", dog: result, human})
    })
    .catch((err) => {
        const errors = handleErrors(err)
        res.status(404).render('404', {title: 'Dog not Found'})
    })
}

module.exports.dog_delete = async (req, res) => {
    const id = req.params.id
    const userID = res.locals.user

    const user = await User.findByIdAndUpdate(userID, {$pull: {registereddogs: id}})

    Dog.findByIdAndDelete(id)
    .then((result) => {
        res.json({
            redirect: '/adoption'
        })
    })
        .catch((err) => {
            const errors = handleErrors(err)
            res.status(400).json({ errors })
        })
}

module.exports.dog_patch = async (req, res) => {
    const id = req.params.id
    const adoptedby = req.userData

    try {
        const adopter = await User.findByIdAndUpdate(adoptedby, { $push: { adopteddogs: id } })

    Dog.findByIdAndUpdate(id, {$set: {adoptionstatus: true, adoptedby}})
        .then((result) => {
            res.json({
                redirect: `/dogs/thanks/${id}`,
            })
        })
    }
    catch (err) {
        const errors = handleErrors(err)
        res.status(400).json({ errors })
    }
}

module.exports.dog_thanks = async (req, res) => {
    const dog = await Dog.findById(req.params.id)
    res.render('thanks', {title: 'Thank You Note', dog})
}

module.exports.send_thanks = async (req, res) => {
    const id = req.params.id
    const adoptedby = req.userData

    try {
        const dogDetails = await Dog.findById(id)
        const user = await User.findByIdAndUpdate(dogDetails.postedby, {$push: {thanks: {note: req.body.note, sentby: adoptedby, for: dogDetails.name}}})
        res.status(200).json({ user })
    }
    catch (err) {
        const errors = handleErrors(err)
        res.status(400).json({ errors })
    }
}
