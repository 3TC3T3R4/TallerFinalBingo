
const express = require('express');
const router = express.Router();
const User = require('../models/user');


router.post('/register', async (req, res) => {

    const {user,password} = req.body;

    const player =  new User({
        user: user,
        password: password
    });

    await player.save( err => {

        if(err){
        res.status(500).json({
            message: err.message})
        }else{

       //alert('USUARIO REGISTRADO');      

        }
        
    });

    res.json({

        player
    
    });



});

module.exports = router;