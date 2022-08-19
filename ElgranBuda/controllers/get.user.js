
const express = require('express');
const router = express.Router();
const User = require('../models/user');

/**
 * Endpoint encargado de  mostrar que usuarios tenemos hasta el momento 
 */
router.get('/users', async (req, res) => {

  try {
    
    const game = await User.find(req.params);
        

    res.status(200).json({

        game
      
      
    })
  } catch (error) {

    console.log(error)
    res.status(500).json({
      message: error.message,
      stack: error.stack
    });
  }
});

module.exports = router;
