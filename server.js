require("dotenv").config();
const connectDB = require("./config/dbConnect");
const express = require('express')
const app = express()
const path = require('path');
let port = process.env.PORT || 3000;
const cors = require('cors');


// execute database connection
connectDB(); 


// Cors
const corsOptions = {
  origin: process.env.ALLOWED_CLIENTS.split(',')
  // ['http://localhost:3000', 'http://localhost:5000', 'http://localhost:3300']
}

app.use(cors(corsOptions))
app.use(express.static('public'));//css import
app.use(express.json());


// Template Engine
app.set('views', path.join(__dirname, '/views'));
app.set('view engine', 'ejs');


// Routes
app.use('/api/files', require('./routes/files'));
app.use('/files', require('./routes/show'));
app.use('/files/download', require('./routes/download'));


app.listen(port, () => { console.log(`Server is running on port ${port}`); });