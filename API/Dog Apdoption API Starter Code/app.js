
//load configuration from .env file
require('dotenv-flow').config();

const express = require('express');
// const { connectToDb, getDb } = require('./db');
const authRoutes = require('./routes/authRoutes')
const cookieParser = require('cookie-parser');
const { checkUser } = require('./middleware/authMiddleware');
const mongoose = require('mongoose')

const app = express();

app.use(express.static('public'));
app.use(express.json());
app.use(cookieParser())


app.set('view engine', 'ejs');


//db connection
const PORT = process.env.PORT || 3000
mongoose.connect(process.env.MONGODB_URI)
.catch(error => console.log("Error connecting to MongoDB: " + error));

mongoose.connection.once('open', () => {
    console.log('Connected succesfully to MongoDB');
    app.listen(PORT, () => {
        console.log('Server is Running on Port ' + PORT)
    })
});

// routes
app.get('/', checkUser, (req, res) => res.render('home', {title: 'Homepage'}));
app.use(authRoutes)
app.use(checkUser, (req, res) => {
    // res.status(404).sendFile('./views/404.html', { root: __dirname})
    res.status(404).render('404', { title: '404' })
})
