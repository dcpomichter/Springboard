const express = require('express');
const { connectToDb, getDb } = require('./db');
const { ObjectId } = require('mongodb');

const app = express();

app.use(express.json())

//load configuration from .env file
require('dotenv-flow').config();


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
