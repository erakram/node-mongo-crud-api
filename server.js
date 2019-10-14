const express = require('express');
const bodyParser = require('body-parser');
const port = process.env.PORT || 3030

const app = express();

app.use(bodyParser.urlencoded({ extended: true }))

app.use(bodyParser.json())

app.use((req, res, next) => {
    res.header('Access-Control-Allow-Origin', 'https://react-api.herokuapp.com/');
    res.header('Access-Control-Allow-Methods', 'GET, PUT, POST, DELETE');
    res.header('Access-Control-Allow-Headers', 'Content-Type');
    next();
});

app.get('/', (req, res) => {
    res.json({"message": "Welcome to node js CRUD API"});
});

// Configuring the database
const dbConfig = require('./config/database.config.js');
const mongoose = require('mongoose');
require('dotenv').config()

mongoose.Promise = global.Promise;
mongoose.set('useFindAndModify', false);

// Connecting to the database
mongoose.connect(dbConfig.url, {
    useNewUrlParser: true
}).then(() => {
    console.log("Successfully connected to the database");    
}).catch(err => {
    console.log('Could not connect to the database. Exiting now...', err);
    process.exit();
});

require('./app/routes/user.routes.js')(app);
// require('./app/routes/contact.routes.js')(app);

app.listen(port, () => {
    console.log("Server is listening on port " +port);
});