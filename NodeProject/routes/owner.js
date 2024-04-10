const express = require('express');
const router = express.Router();
const controller = require('../Controllers/owner');

router.route('/:OwnerID')
.get(controller.getOwner)
.delete(controller.deleteOwner)
.post(controller.updateOwner)
.put(controller.addOwner)
    


module.exports = router;