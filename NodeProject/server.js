const  controller = require('./controller');
const  express = require('express');
const dotenv = require('dotenv');
dotenv.config({path: './config'});

const PORT = process.env.PORT || 8090;

const app = express();
const dogsRouter = require('./routes/dogs');


app.use('/dogs', dogsRouter);


app.listen(PORT, () => {
    console.log(`Dog server is running on port: ${PORT}`); 
  });
