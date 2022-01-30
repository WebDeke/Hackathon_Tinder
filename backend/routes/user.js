const express = require('express');
const router = express.Router();
const { body, validationResult } = require('express-validator');
const User = require('../models/Users');

router.post('/adddetails',[
    body('firstName').isLength({ min: 3 }),
    body('gender').isLength({ min: 1 }),
    body('skills').isLength({ min: 2 }),
    body('primaryContact').isLength({ min: 3 }),
],async (req,res)=>{
    console.log(req.body);
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res.status(400).json({ errors: errors.array() });
    }
    try{
   
    User.create({
        firstName: req.body.firstName,
        middleName: req.body.middleName,
        lastName: req.body.lastName,
        studyLevel: req.body.studyLevel,
        major: req.body.major,
        institution: req.body.institution,
        gender: req.body.gender,
        phoneNumber: req.body.phoneNumber,
        status: req.body.status,
        skills: req.body.skills,
        country: req.body.country,
        primaryContact: req.body.primaryContact,
        github: req.body.github,
        twitter: req.body.twitter,
      }).then(user => res.json(user));
    }
    catch(error){
        console.log(error.message);
        res.status(500).send("Some error occured");
    }
})

module.exports = router;