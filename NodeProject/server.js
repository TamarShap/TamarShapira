
const  controller = require('./controller');
const config = require('./config');
const  express = require('express');
const dotenv = require('dotenv');
dotenv.config({path: './config'});

const PORT = process.env.PORT || 8090;

const  app = express();



app.get('/dogs/:OwnerID', controller.GetDogsOfOwner);


app.listen(PORT, () => {
    console.log(`Dog server is running on port: ${PORT}`);
  });
