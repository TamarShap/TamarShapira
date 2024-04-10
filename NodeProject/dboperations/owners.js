const config = require('../dbconfig');
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
        throw error;
    }
}

async function deleteOwner(ownerID) {
    try {
        let pool = await sql.connect(config);

        await pool.request()
            .input('OwnerID', sql.VarChar(10), ownerID)
            .execute('sp_DeleteDogsOfOwner');

        let returnValue = await pool.request()
            .input('OwnerID', sql.VarChar(10), ownerID)
            .execute('sp_DeleteOwner');

        return returnValue.returnValue;
    }
    catch (error) {
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

        return owner.returnValue;

    }
    catch (error) {
        throw error;
    }
}


async function addOwner(ownerID, name, Address, PhoneNumber) {
    try {
        let pool = await sql.connect(config);

        let owner = await pool.request()
            .input('OwnerID', sql.VarChar(10), ownerID)
            .input('Name', sql.VarChar(10), name)
            .input('Address', sql.VarChar(10), Address)
            .input('PhoneNumber', sql.VarChar(10), PhoneNumber)
            .execute('sp_AddDogOwner');

        return owner.recordset;

    }
    catch (error) {
        throw error;
    }
}


async function registerUser(name, email, role, password) {
    try {
        let pool = await sql.connect(config);

        let user = await pool.request()
            .input('Email', sql.VarChar(10), email)
            .input('Name', sql.VarChar(10), name)
            .input('Role', sql.VarChar(10), role)
            .input('Password', sql.VarChar(50), password)
            .input('CreatedAt', sql.VarChar(10), Date.now())
            .execute('sp_RegisterUser');

        return user.recordset;

    }
    catch (error) {
        throw error;
    }
}


module.exports = {
    getDogsOfOwner,
    deleteDogsOfOwner,
    getOwner,
    deleteOwner,
    updateOwner,
    addOwner,
  }