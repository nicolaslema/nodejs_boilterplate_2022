const express = require('express');
const router = express.Router();
const {getIndex, getValidTest} = require('./index.controller')



router.get('/index', getIndex)
router.get('/isValid', getValidTest)
    


module.exports = router;