require ('dotenv').config();
const express = require('express');
const app = express();
const cors = require('cors');
const cookieParser = require('cookie-parser');

const PORT = process.env.PORT || 3500

app.use(express.urlencoded({extended: true}));
app.use(cookieParser());
app.use(cors());

// app.use('/auth', require('./Controller/Routes/auth'))

app.listen(PORT, () => {
    console.log('listening on ' + PORT)
})