const express = require('express'); //initialize express application
const app = express(); //initiate express application
const router = express.Router();
const mongoose = require('mongoose'); //MongoDB tool
const config = require('./config/database');  // Mongoose configuration
const path = require('path');  //NodeJS package for file paths
const authentication = require('./routes/authentication')(router); // Import Authentication routes
const bodyParser = require('body-parser'); //parse incoming request in middleware before handlers
const cors = require('cors');
const morgan = require('morgan');

//MIDDLEWARE
//order is important!
app.use(morgan('dev')); //every time a request is made to server, log to console
app.use(cors({
    origin: 'http://localhost:4200'  //we get rid of this when we go live
}))
//Provide static directory for front end
app.use(bodyParser.urlencoded({extended: false}));//false accepts string or array, true accepts any type
app.use(bodyParser.json());//parse application/json
app.use(express.static(__dirname + '/client/dist/client/'));//use express, serving static file location
app.use('/authentication', authentication); //distinguish front and back end routes: this is back end

//DATABASE Connection
mongoose.Promise = global.Promise; //configuration
mongoose.connect(config.uri, {useNewUrlParser: true}, (err) => {//updated Parser code
    if (err) {
        console.log('Could not connect to database: ', err);
        //throw err; //crashes node server if MongoDB connect error
    } else {
        // console.log(config.secret); //display secret for token
        console.log('Connected to database: ' +config.db);
    }
});

// Connect server to index.html
app.get('*', (req,res) => {
    res.sendFile(path.join(__dirname + '/client/dist/client/index.html'));
});

// include connection confirmation on console
app.listen(8080, () => { // other tutorial uses function() at end
    console.log('Listening to my man on port 8080');
}); //invoke express into app on port 8080