const express = require('express');
const router = express.Router();
const controller = require('../controller');



router.route('/:OwnerID').get(controller.GetDogsOfOwner);


module.exports = router;