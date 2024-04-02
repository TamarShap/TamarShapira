const  Db = require('./dboperations');


async function GetDogsOfOwner (req, res, next) {
    const OwnerID = req.params.OwnerID;
    const dogs = await Db.getDogsOfOwner(OwnerID);
    res
    .status(200)
    .json(dogs);
  }
  
  
  module.exports = {
    GetDogsOfOwner,
  }