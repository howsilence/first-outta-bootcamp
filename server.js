const express = require('express');
const app = express();
const PORT = 5000;

const mongoose = require('mongoose');
mongoose.Promise = global.Promise;
const mongoDB = "mongodb+srv://Admin:pwd@cluster0.w6lmp.mongodb.net/growflow_challenge?retryWrites=true&w=majority"
mongoose.connect(mongoDB, {useNewUrlParser: true, useUnifiedTopology: true});


app.use(express.json());
app.use(express.urlencoded({ extended: true }));

const phoenixRouter = require('./routes/phoenix');
app.use('/', phoenixRouter);  
app.listen(PORT);


console.log(`Phoenix API running on localhost:${PORT}`);
module.exports = app;