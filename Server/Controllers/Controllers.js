const async = require('hbs/lib/async');
// const pool = require('../Database/db');
// const dbsSchema = require('../Database/database.sql');

const express = require('express');
const mongoose = require('mongoose');
const models = require('../Models/Models');
const routers = require('../Routers/Router');
const Models = require("../Models/Models");

//Updaating the User table with FIrebase database
//Delete the table database

const CreateNewUser = async(req,res)=> {
    // try {
    //     // const {us } = req.body;
    //     const collections = Workouts.insertMany(req.body, (err, results)=> res.json(results));
    //     // console.log(NewUser)
    //     // res.status(200).json(NewUser);
    // } catch(err) {
    //     res.status(400).json({err : err.message});
    // }
    //
    // // res.json({msg: "New User Created"});
}

//Adding the New Stock in the warehousestock table
//Doubt
const GetAllData = async(req,res)=>{
    try{
        const {user_id}=req.params;
        const collections = Models.findbyId({user_id : user_id});
        res.status(200).json(collections);
    }
    catch(e){

    }
}

const AddStock = async(req,res)=>{
    try{

        // const NewStock = Workouts.create(title, email,{stock: [{stock_id}, {date_of_importing}, {no_of_units}, {no_of_items_in_one_unit}, {date_of_expiration}, {isbn}]});
        const{user_id} = req.params;
        const importing = (Models.findById({user_id})).date_of_importing;
           const NewStock = Models.find({id:_id}).insertMany(req.body);
        try{
            // await NewStock.save();
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
const GetAlldata = async(req,res)=>{
    try {
        const {id} = req.params;
        const stocks = Models.findById({user_id});
        res.status(200).json(Stocks);
    }
    catch (err){
        res.status(400).json({err : err.message});
    }
    res.json({msg : "All the Stock is shown"});
}

// //To Update the Query During the Dispatch Timings
// //Check The Update Query
// //Maybe We can make another one-many relation table with stock and disptch table
//
// const UpdateStock = async(req,res)=>{
//     try {
//         const {id} = req.params;
//         const {stock_id, no_of_units} = req.body;
//         const UpdatedStock = await pool.query("UPDATE INTO warehousestock WHERE (user_id = $1 && stock_id = $2) RETURNING * ", [id, stock_id, no_of_units]);
//         res.status(200).json(UpdatedStock);
//     }
//     catch (err){
//         res.status(400).json({err : err.message});
//     }
//     res.json({msg : "Stock Got Updated"});
// }
//
// //Getting the data related to the Dispatched items inside the Dispatch section
//
// const DispatchedStock = async(req,res)=> {
//     try {
//         const {id} = req.params;
//         const DispatchStock = await pool.query("SELECT * FROM dispatched WHERE user_id =($1)", [id]);
//         res.status(200).json(DispatchStock);
//     } catch (err) {
//         res.status(400).json({err: err.message});
//     }
//     res.json({msg: "All of t\he Dispatched stock shown"});
// }
module.exports = {CreateNewUser,GetAllData, AddStock};

