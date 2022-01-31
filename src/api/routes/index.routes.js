const express = require('express');
const {Router} = require('express');
const router = express.Router();



router.get('/index', (req, res)=>{
    let num1 = 11;
    num1 += 5;
    const result = 20 + num1;
   
    res.send({result});

})
    


module.exports = router;