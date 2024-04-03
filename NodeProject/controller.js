const  Db = require('./dboperations');

async function getDogsOfOwner (req, res, next) {
    const ownerID = req.params.OwnerID;
    const dogs = await Db.getDogsOfOwner(ownerID);
    res
    .status(200)
    .json(dogs);
  }

  async function deleteDogsOfOwner (req, res, next) {
    const ownerID = req.params.OwnerID;
    const dogs = await Db.deleteDogsOfOwner(ownerID);
    if (dogs == 0)
    {
      res
      .status(200)
      .json({msg: `Dogs of Owner with ownerID ${ownerID} were deleted successfully`});
    }
    else
    res
    .status(500)
    .json({msg: `Dogs of Owner with OwnerID ${ownerID} were deleted not deleted`});
  } 
  

  async function getOwner (req, res, next) {
    const ownerID = req.params.OwnerID;
    const owner = await Db.getOwner(ownerID);
    res
    .status(200)
    .json(owner);
  }
  

  async function deleteOwner (req, res, next) {
    const ownerID = req.params.OwnerID;
    const owner = await Db.deleteOwner(ownerID);
    res
      .status(200)
      .json({msg: `owner was deleted successfully from the system`});
  }


  async function updateOwner (req, res, next) {
    const ownerID = req.params.OwnerID;
    const newAddress = req.body.newAddress;
    const newNumber = req.body.newNumber;
    console.log('params are:' + newAddress + newNumber)
    const owner = await Db.updateOwner(ownerID, newAddress, newNumber);
    res
      .status(200)
      .json(owner);
  }




  module.exports = {
    getDogsOfOwner,
    deleteDogsOfOwner,
    getOwner,
    deleteOwner,
    updateOwner
  }