const express = require('express');
const bodyParser = require('body-parser');
const User = require('../models/user');
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');
SECRET = "RESTAPI"

const { body, param, validationResult, oneOf } = require("express-validator")

const router = express.Router()

router.use(bodyParser());

/* =========================== LOGIN ===============================*/

router.post("/login",body("name"), body("password"), async (req, res) => {
    try {
        const error = validationResult(req)
        if (!error.isEmpty()) {
            return res.status(400).json({ errors: error.array() })
        }
        let user
        console.log(req.body)
        if(req.body.name){
            var {name,password} = req.body
            user = await User.findOne({name })
        }
        if (!user) {
            return res.status(401).json({
                status: "failed",
                message: "invalid user"
            })
        } 
        bcrypt.compare(password,user.password).then(function(result){
            if (result){
                var token = jwt.sign({
                    data: user._id
                },SECRET,{ expiresIn: '7d'})
                
                return res.status(200).json({
                    status:"success",
                    Token:token,
                    User:user
                })
            }else{
                return res.status(401).json({
                    status: "failed",
                    message:"not authenticated"
                })
            }
        })

    } catch (e) {
        return res.status(500).json({
            status: "Failed",
            message: e.message
        })
    }
})




module.exports = router