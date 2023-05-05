const express = require('express');
const userRoute = express.Router(); 
const controller=require('../controllers/userController');

// const config = require('../config/config')
userRoute.post('/register',controller.register);
userRoute.post('/login',controller.login);
userRoute.get("/getUser/:id",controller.getUser);
userRoute.put('/update/:id',controller.updateUser);
userRoute.delete('/delete/:id',controller.deleteData);
userRoute.get("/emailverify",controller.emailVerify);

module.exports = userRoute;

