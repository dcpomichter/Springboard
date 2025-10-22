const express = require('express');
const { connectToDb, getDb } = require('./db');
const { ObjectId } = require('mongodb');
const authRoutes = require('./routes/authRoutes')
const cookieParser = require('cookie-parser');
const { requireAuth, checkUser } = require('./middleware/authMiddleware');

const app = express();

app.use(express.static('public'));
app.use(express.json());
app.use(cookieParser())

//load configuration from .env file
require('dotenv-flow').config();

app.set('view engine', 'ejs');


//db connection
let db
connectToDb((err) => {
    if (!err) {
        app.listen(3000, () => {
            console.log('Server Running on Port 3000')
        })
        db = getDb()
    }
})

// routes
app.get('*', checkUser);
app.get('/', (req, res) => res.render('home'));
app.use(authRoutes)
