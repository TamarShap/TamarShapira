const express = require('express');
const router = express.Router();
const controller = require('../Controllers/owner');

router.route('/:OwnerID')
.get(controller.getDogsOfOwner)
.delete(controller.deleteDogsOfOwner);


module.exports = router;