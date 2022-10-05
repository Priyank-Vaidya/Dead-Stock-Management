const async = require('hbs/lib/async');
const pool = require('../Database/db');
const dbsSchema = require('../Database/database.sql');

const CreateNewUser = async(req,res)=> {
    try {
        const {inputdata} = req.body;
        const NewUser = await pool.query("INSERT INTO warehouse (email) VALUES ($1)",[inputdata]);
        res.status(200).json(NewUser);
    } catch(err) {
        res.status(400).json({err : err.message});
    }
    res.json({msg: "New User Created"});
}

//Adding the New Stock in the warehousestock table
//Doubt

const AddStock = async(req,res)=>{

    try{
        const {id} = req.params;
        const {stock_name, date_of_importing, no_of_units, no_of_items_in_one_unit, date_of_expiration, isbn} = req.body;
        const NewStock = await pool.query("INSERT INTO warehousestock (stock_id, stock_name, date_of_importing, no_of_units, no_of_items_in_one_unit, date_of_expiration, isbn) VALUES($2,$3,$4,$5,$6,$7,$8) WHERE user_id RETURNING * = ($1)", [id,stock_id, stock_name,date_of_importing,no_of_units,no_of_items_in_one_unit,date_of_expiration,isbn ]);
        res.status(200).json(NewStock);
    }
    catch (err) {
        res.status(400).json({err : err.message});
    }
}

//Get all the data related to Stock of the particular User_id

const GetAlldata = async(req,res)=>{
    try {
        const {id} = req.params;
        const Stocks = await pool.query("SELECT * FROM warehousestock WHERE user_id = ($1)",[id]);
        res.status(200).json(Stocks);
    }
    catch (err){
        res.status(400).json({err : err.message});
    }
    res.json({msg : "All the Stock is shown"});
}

//To Update the Query During the Dispatch Timings
//Check The Update Query
//Maybe We can make another one-many relation table with stock and disptch table

const UpdateStock = async(req,res)=>{
    try {
        const {id} = req.params;
        const {stock_id, no_of_units} = req.body;
        const UpdatedStock = await pool.query("UPDATE INTO warehousestock WHERE (user_id = $1 && stock_id = $2) RETURNING * ", [id, stock_id, no_of_units]);
        res.status(200).json(UpdatedStock);
    }
    catch (err){
        res.status(400).json({err : err.message});
    }
    res.json({msg : "Stock Got Updated"});
}
module.exports = {CreateNewUser,AddStock,GetAlldata,UpdateStock};

