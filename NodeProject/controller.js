const  Db = require('./dboperations');


async function GetDogsOfOwner (req, res) {
    const OwnerID = req.params.OwnerID;
    const dogs = await Db.getDogsOfOwner(OwnerID);
    res.json(dogs);
  }
  
  
  module.exports = {
    GetDogsOfOwner,
  }