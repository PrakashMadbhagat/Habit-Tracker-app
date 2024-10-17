const express = require('express');
const app = express();
const PORT = process.env.PORT;
const mongoose = require('./database/database');
const authRoute = require('./routes/authRoute');
const habitRoute = require('./routes/habitRoute');
const adminRoute = require('./routes/adminRoute');
const notificationJob = require('./job/notification')
const cookie_parser = require('cookie-parser');
require('dotenv').config();

app.use(cookie_parser());
app.use(express.json());
app.use('/', authRoute);
app.use('/habit', habitRoute);
app.use('/admin', adminRoute);

app.listen(PORT, (req,res) =>{
    console.log(`Server is connected to port ${PORT} `);
    
})