const mongoose = require('mongoose');

const dogSchema = new mongoose.Schema({
    name: {
        type: String,
        required: [true, 'Name is required'],
    },
    description: {
        type: String,
        required: [true, 'A brief description is required'],
        minlength: 6,
    },
    postedby: {
        type: String,
        required: true,
    },
    adoptionstatus: {
        type: Boolean,
        default: false

    },
    adoptedby: {
        type: String,
        default: ''
    }
})

//fire a function before a doc is saved to the db
dogSchema.pre('save', async function (next) {
    next()
})

//fire a function after a doc is saved to the db
dogSchema.post('save', function (doc, next) {
    next()
})




const Dog = mongoose.model('dog', dogSchema)

module.exports = Dog;
