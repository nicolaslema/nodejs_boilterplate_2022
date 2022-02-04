const express = require('express');
const router = express.Router();
const {getIndex, getValidTest, testErrorHandler} = require('./index.controller');



router.get('/index', getIndex);
router.get('/isValid', getValidTest);
router.get('/testErrorHandler', testErrorHandler);
    


module.exports = router;