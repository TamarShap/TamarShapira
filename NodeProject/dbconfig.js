const  dbconfig = {
    user:  'sa', // sql user
    password:  '123', //sql user password
    server:  'localhost',
    database:  'CityDogManagement',
    options: {
      trustedconnection:  true,
      enableArithAbort:  true,
      instancename:  'LAPTOP-RHM24H9E\TAMARSQL'  // SQL Server instance name
    },
    port:  61842
  }
  
  module.exports = dbconfig;