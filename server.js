////////Imports
const express = require("express");
const app = express();
const bodyParser = require("body-parser");
const mongoose = require("mongoose");
const validate = require("mongoose-validator");


///////Config FILES

app.use(express.static( __dirname + '/public/dist/public' ));
app.use(express.json());


//Database
mongoose.connect('mongodb://localhost/rate_my_cakes');
require('./config/mongoose.js');

//Routes
require('./config/routes.js')(app);

//Port
app.listen(4200, function(){
    console.log("Listening on port: 4200");
})