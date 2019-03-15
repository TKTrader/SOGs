const express = require('express'); //initialize express application
const app = express(); //initiate express application
const router = express.Router();
const mongoose = require('mongoose'); //MongoDB tool
const config = require('./config/database');  // Mongoose configuration
const path = require('path');  //NodeJS package for file paths
const authentication = require('./routes/authentication')(router); // Import Authentication routes
const bodyParser = require('body-parser'); //parse incoming request in middleware before handlers
const cors = require('cors');

mongoose.Promise = global.Promise; //configuration
mongoose.connect(config.uri, (err) => {
    if (err) {
        console.log('Could not connect to database: ', err);
    } else {
        // console.log(config.secret); //display secret for token
        console.log('Connected to database: ' +config.db);
    }
});

//Middleware
app.use(cors({
    origin: 'http://localhost:4200'  //we get rid of this when we go live
}))
//Provide static directory for front end
app.use(bodyParser.urlencoded({extended: false}));
//parse application
app.use(bodyParser.json());
app.use(express.static(__dirname + '/client/dist/client/'));
app.use('/authentication', authentication);

// Connect server to index.html
app.get('*', (req,res) => {
    res.sendFile(path.join(__dirname + '/client/dist/client/index.html'));
});

// include connection confirmation on console
app.listen(8080, () => {
    console.log('Listening to my man on port 8080');
});