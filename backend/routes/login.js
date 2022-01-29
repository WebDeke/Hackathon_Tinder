const express = require('express');
const router = express.Router();
const Login = require('../models/Login');

router.post('/', (req,res)=>{
    console.log(req.body);
    const newUser = Login(req.body);
    newUser.save();
    res.send(req.body);
})

module.exports = router;