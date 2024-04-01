const config = require('./dbconfig');
const sql = require('mssql');

const GetDogsOfOwner = 'sp_GetDogsOfOwner';

async function getDogsOfOwner(OwnerID) {

    try {
        let pool = await sql.connect(config);
        let dogs = await pool.request()
        .input('OwnerID',sql.VarChar(10), OwnerID)
        .execute(GetDogsOfOwner);

        return dogs.recordset;
    }
    catch (error) {
        console.log(error);
    }
}


module.exports = {
    getDogsOfOwner,
  }