require('dotenv').config();
const express = require('express');
// const routers = require('../Server/Routers');
const cors = require('cors');
// const pools = require("../Server/Database/db");
const routers = require('../Server/Routers/Router');

const app = express();

//middleware
//use of cors dependencies will help to jump to the next specific function
app.use(cors());
app.use(express.json());
// app.use((req,res,next)=>{
//     console.log(req.path, req.method);
//     next();
// });
app.use('/stack', routers);

//Listening to the Requests
app.listen(5000, ()=>{
    console.log("Server has startes on port 5000 ");

});
