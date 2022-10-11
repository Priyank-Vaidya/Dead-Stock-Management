const express = require('express');
const async = require('hbs/lib/async');
const dbsSchema = require('../Database/database.sql');
const {CreateNewUser,AddStock,GetAlldata,UpdateStock, DispatchedStock} = require("../Controllers/Controllers");

const router = express.Router();
router.get('/stack/:id', GetAlldata);
router.get('/stack/:id', DispatchedStock);
router.post("/stack", CreateNewUser);
router.patch("/stack/:id", UpdateStock);
router.post("/stack/:id", AddStock);

module.exports = router;