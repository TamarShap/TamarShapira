const config = require('./dbconfig');
const sql = require('mssql');



async function getDogsOfOwner(OwnerID) {

    try {
        let pool = await sql.connect(config);
        let dogs = await pool.request()
        .input('OwnerID',sql.VarChar(10), OwnerID)
        .execute('sp_GetDogsOfOwner');

        return dogs.recordset;
    }
    catch (error) {
        console.log(error);
    }
}


async function deleteDogsOfOwner(OwnerID) {

    try {
        let pool = await sql.connect(config);
        let dogs = await pool.request()
        .input('OwnerID',sql.VarChar(10), OwnerID)
        .execute('sp_DeleteDogsOfOwner');

        return dogs.returnValue;
    }
    catch (error) {
        console.log(error);
    }
}





module.exports = {
    getDogsOfOwner,
    deleteDogsOfOwner,
  }