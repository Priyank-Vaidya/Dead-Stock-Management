
const Models = require("../Models/Models");
const bcrypt = require('bcryptjs');
const sendToken = require('../utils/jwtToken');
const jwt = require("jsonwebtoken");

//Updaating the User table with FIrebase database
//Delete the table database

const CreateNewUser = async(req,res)=> {

    const {name,email, password} = req.body;
    const existingUser = await Models.findOne({email})
    if(existingUser){
        res.status(401).send("User Already Exists");
    }
    const encPass = await bcrypt.hash(password, 10);
    const user = await Models.create({name, email, password: encPass});

    const token = jwt.sign({
        user_id: user._id, email
    }, process.env.SECRET_KEY, {
        expiresIn: "5d"
    });

    user.token = token;
    user.password = undefined;
    res.status(200).json(user);

}

const LoginUser = async(req,res)=>{
    const {email, password} = req.body;

    if(!email||!password){
        res.status(401).send("Please Enter Email and Password");

    }

    const user = await Models.findOne({email}).select("+password");
    if(!user){
        res.status(401).send("Invalid Email or Password");
    }
    if(user && (await bcrypt.compare(password, user.password))){
        const token = jwt.sign(

            //Might be an error here...
            {user_id: user.select({user_id: _id}), email},
            process.env.SECRET_KEY,
            {expiresIn: "5d"})

        user.token = token;
        user.password = undefined;
        res.status(200).json(user);
    }
    res.status(400).send("Email or password is incorrect");
}

//Adding the New Stock in the warehousestock table
//Doubt

const AddStock = async(req,res)=>{
    try{
        const{user_id} = req.params;
        const NewStock = Models.insertMany(req.body, (err, results)=>{res.json(results)});
        try{
            res.status(200).json(NewStock);
        }
        catch(e){
            res.status(400).json({e : e.message});
        }
    }
    catch (err) {
        res.status(400).json({err : err.message});
    }
}
//
// //Get all the data related to Stock of the particular User_id
//
const GetAllData = async(req,res)=>{
    try {
        const {user_id} = req.params;
        const Stocks = Models.findById({user_id});

        res.status(200).json(Stocks);
    }
    catch (err){
        res.status(400).json({err : err.message});
    }
    res.json({msg : "All the Stock is shown"});
}


const dispatchedStock = async(req,res)=>{
    try{
        const {user_id, user_name} = req.params;
        const Dispatched = await Models.findById(user_id).select('dispatched')
    }
    catch(err){

    }
}

module.exports = {CreateNewUser,GetAllData, AddStock, dispatchedStock, LoginUser};

