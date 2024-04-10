const  Db = require('../dboperations/owners');
const ErrorResponse = require('../utils/errorResponse');


async function getDogsOfOwner (req, res, next) {
    const ownerID = req.params.OwnerID;
    
    try {
        const dogs = await Db.getDogsOfOwner(ownerID);
        if (dogs.length === 0) {
          return next (
            new ErrorResponse(`Owner ID not found with ${ownerID}`, 404))
        }
        res
        .status(200)
        .json(dogs);
   
      } catch (err) {
      next(err);
      }

    }


  async function deleteDogsOfOwner (req, res, next) {
    const ownerID = req.params.OwnerID;
    
    try {
      const returnValue = await Db.deleteDogsOfOwner(ownerID);
      if (returnValue === 1)
      {
        return next (
          new ErrorResponse(`Owner ID not found with ${ownerID}`, 404))
      }
      res
      .status(200)
      .json({msg: `Dogs of Owner with ownerID ${ownerID} were deleted successfully`});
      
    } catch (err) {
      next(err);
    }
    
  } 
  

  async function getOwner (req, res, next) {
    const ownerID = req.params.OwnerID;
    
    try {
      const owner = await Db.getOwner(ownerID);
      
      if (owner.length === 0) {
        return next (
          new ErrorResponse(`Owner ID not found with ${ownerID}`, 404))
      }
      
      res
      .status(200)
      .json(owner);

    } catch (err) {
      next(err);
    }

  }
  

  async function deleteOwner (req, res, next) {
    const ownerID = req.params.OwnerID;
    
    try {
      const returnValue = await Db.deleteOwner(ownerID);
      console.log(returnValue);
      if (returnValue === 1)
      {
        return next(
          new ErrorResponse(`Owner ID not found with ${ownerID}`, 404))
      }
      
      res
        .status(200)
        .json({msg: `owner was deleted successfully from the system`});
    } catch (err) {
      next(err);
    }

  }

  async function updateOwner (req, res, next) {
    const ownerID = req.params.OwnerID;
    const newAddress = req.body.newAddress;
    const newNumber = req.body.newNumber;

    try {
      const returnValue = await Db.updateOwner(ownerID, newAddress, newNumber);
      if (returnValue === 1)
      {
        return next(
          new ErrorResponse(`Owner ID not found with ${ownerID}`, 404))
      }

      res
        .status(200)
        .json({msg: `owner was updated successfully in the system`});
    } catch (err) {
      next(err);
    }


  }

  async function addOwner (req, res, next) {
    const ownerID = req.params.OwnerID;
    const name = req.body.name;
    const Address = req.body.Address;
    const Number = req.body.Number;

    try {

      await Db.addOwner(ownerID, name, Address, Number);
      res
        .status(200)
        .json({msg: `owner was added successfully to the system`});
    } catch (err) {
      next(err);
    }

  }


  module.exports = {
    getDogsOfOwner,
    deleteDogsOfOwner,
    getOwner,
    deleteOwner,
    updateOwner,
    addOwner
  }