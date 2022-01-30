const express = require('express');
const router = express.Router();
const Login = require('../models/Login');
const { body, validationResult } = require('express-validator');


router.post('/createuser',[
    body('email','Enter a valid email').isEmail(),
    body('name', 'Enter a valid name').isLength({ min: 3 }),
    body('password', 'Enter a valid password').isLength({ min: 5 }),
],async (req,res)=>{
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res.status(400).json({ errors: errors.array() });
    }
    try{

    let user = await Login.findOne({email:req.body.email});
    console.log(user);
    if(user){
        return res.status(400).json({"error": "Sorry user with this mail exists"});
    }
    
    Login.create({
        name: req.body.name,
        email: req.body.email,
        password: req.body.password,
      }).then(user => res.json(user));
    }
    catch(error){
        console.log(error.message);
        res.status(500).send("Some error occured");
    }
})

module.exports = router;