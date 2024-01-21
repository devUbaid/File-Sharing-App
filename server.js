
const connectDB = require("./config/dbConnect");
const express = require('express')
const app = express()
const path = require('path');
require("dotenv").config();
let port = process.env.PORT || 3000;

// execute database connection
// dbConnect();

connectDB(); 

app.use(express.static('public'));//css import


app.set('views', path.join(__dirname, '/views'));
app.set('view engine', 'ejs');

app.use(express.json());

// Routes
app.use('/api/files', require('./routes/files'));
app.use('/files', require('./routes/show'));
app.use('/files/download', require('./routes/download'));

app.listen(port, () => {
    console.log(`Server is running on port ${port}`);
  });