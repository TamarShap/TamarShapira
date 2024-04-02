const express = require('express');
const router = express.Router();
const controller = require('../controller');



router.route('/:OwnerID')
.get(controller.getDogsOfOwner)
.delete(controller.deleteDogsOfOwner);


module.exports = router;