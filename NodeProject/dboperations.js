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
        throw error;
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
        console.log(error)
        throw error;
    }
}


async function getOwner(OwnerID) {
    try {
        let pool = await sql.connect(config);
        let owner = await pool.request()
            .input('OwnerID',sql.VarChar(10), OwnerID)
            .execute('sp_GetOwner');

        return owner.recordset;
    }
    catch (error) {
        console.log(error)
        throw error;;
    }
}

async function deleteOwner(ownerID) {
    try {
        let pool = await sql.connect(config);

        await pool.request()
            .input('OwnerID', sql.VarChar(10), ownerID)
            .execute('sp_DeleteDogsOfOwner');

        await pool.request()
            .input('OwnerID', sql.VarChar(10), ownerID)
            .execute('sp_DeleteOwner');

    }
    catch (error) {
        console.log(error)
        throw error;
    }
}


async function updateOwner(ownerID, newAddress, newPhoneNumber) {
    try {
        let pool = await sql.connect(config);

        let owner = await pool.request()
            .input('OwnerID', sql.VarChar(10), ownerID)
            .input('NewAddress', sql.VarChar(10), newAddress)
            .input('NewNumber', sql.VarChar(10), newPhoneNumber)
            .execute('sp_UpdateOwner');

        return owner.recordset;

    }
    catch (error) {
        console.log(error)
        throw error;
    }
}




module.exports = {
    getDogsOfOwner,
    deleteDogsOfOwner,
    getOwner,
    deleteOwner,
    updateOwner
  }