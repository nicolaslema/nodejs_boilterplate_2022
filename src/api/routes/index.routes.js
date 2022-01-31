const express = require('express');
const {Router} = require('express');
const router = express.Router();



router.get('/index', (req, res)=>{
   
    res.send("hellow world");

})
    


module.exports = router;