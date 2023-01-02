const express = require('express');
// const dbsSchema = require('../Database/database.sql');
const {CreateNewUser,GetAllData, AddStock, dispatchedStock} = require('../Controllers/Controllers');

const router = express.Router();
// router.get('/stack/', GetAllData);
router.post('api/stack/register');
router.post('api/stack/login');
router.get('api/stack/:user_id', dispatchedStock);
router.post("api/stack/", CreateNewUser);
router.post("api/stack/:user_id/", AddStock);
router.get("api/stack/:user_id", GetAllData);



module.exports = router;
