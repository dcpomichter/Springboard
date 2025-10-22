const mongoose = require('mongoose')

let dbConnection

module.exports = {
    connectToDb: (cb) => {
        mongoose
            .connect(process.env.MONGODB_URI)
            .then((res) => {
                console.log('MongoDB Connected')
                app.listen(5000, console.log('Server Running on http://localhost:5000'));
                return cb()
            })
            .catch(err => {
                console.log(err)
                return cb(err)
            })
    }
}
