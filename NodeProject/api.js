
const  controller = require('./controller');
const config = require('./config');
const  express = require('express');
const  app = express();

const port = config.port;

app.get('/dogs/:OwnerID', controller.GetDogsOfOwner);


app.listen(port, () => {
    console.log(`Dog api is running on port: ${port}`);
  });
