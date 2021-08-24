const dotenv = require('dotenv');
const mongoose = require('mongoose');
const express = require('express');
const app = express();

// connecting and requiring database to backend
dotenv.config({ path: './config.env'});
require('./db/connection');

// securing port number (same as database URL)
const MYPORT = process.env.MYPORT;

// middleware
// middleware is basically a work that is to be done before the main work
// declaring middleware
const middleware = (req,res,next) => {
    console.log(`middleware work is done`);
    next();
}

// app.use (setting middleware) to use Router method of express (exporting router from routr.js)
app.use( require('./routes/route'));

app.use(express.json());

app.listen(MYPORT,(req,res)=>{
    console.log(`app started at ${MYPORT} port`);
})