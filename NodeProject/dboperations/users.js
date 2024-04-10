const config = require('../dbconfig');
const sql = require('mssql');


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
    registerUser
}