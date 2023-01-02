// require('dotenv').config();
const express = require('express');
// const routers = require('../Server/Routers');
const cors = require('cors');
const routers = require('./Routers/Router');
const mongoose = require('mongoose');



const app = express();

//middleware
//use of cors dependencies will help to jump to the next specific function
app.use(cors());

app.use(express.json());
// app.use((req,res,next)=>{
//     console.log(req.path, req.method);
//     next();
// });
app.use('/api', routers);

//Listening to the Requests

mongoose.connect(process.env.MONGO_URI, {user: process.env.MONGO_USER, pass: process.env.MONGO_PASSWORD, useNewUrlParser: true , useUnifiedTopology: true })
const db = mongoose.connection;

try{
    app.listen(process.env.PORT,()=>{
        console.log("connected to db and Listening to port 5000");
        // });

    });
}
catch (error) {console.log("Error in connecting")};
