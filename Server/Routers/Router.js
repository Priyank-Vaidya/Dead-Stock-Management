const express = require('express');
// const dbsSchema = require('../Database/database.sql');
const {CreateNewUser,GetAllData, AddStock} = require('../Controllers/Controllers');

const router = express.Router();
// router.get('/stack/', GetAllData);
// router.get('/stack/title', DispatchedStock);
router.post("/stack/", CreateNewUser);
router.get("/stack/:user_id/", GetAllData);
router.post("/stack/:user_id", AddStock);
// router.patch("/stack/title", UpdateStock);
// router.post("/stack/:user_id/item/:item_id", UpdateStock);


module.exports = router;
