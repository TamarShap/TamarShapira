const  Db = require('./dboperations');


async function getDogsOfOwner (req, res, next) {
    const OwnerID = req.params.OwnerID;
    const dogs = await Db.getDogsOfOwner(OwnerID);
    res
    .status(200)
    .json(dogs);
  }

  async function deleteDogsOfOwner (req, res, next) {
    const OwnerID = req.params.OwnerID;
    const dogs = await Db.deleteDogsOfOwner(OwnerID);
    if (dogs == 0)
    {
      res
      .status(200)
      .json({msg: `Dogs of Owner with OwnerID ${OwnerID} were deleted successfully`});
    }
    else
    res
    .status(500)
    .json({msg: `Dogs of Owner with OwnerID ${OwnerID} were deleted not deleted`});

  } 
  
  
  module.exports = {
    getDogsOfOwner,
    deleteDogsOfOwner
  }