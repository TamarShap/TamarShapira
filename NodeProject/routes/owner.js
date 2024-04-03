const express = require('express');
const router = express.Router();
const controller = require('../controller');

router.route('/:OwnerID')
.get(controller.getOwner)
.delete(controller.deleteOwner)
.post(controller.updateOwner)
    


module.exports = router;