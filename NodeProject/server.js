const  express = require('express');
const bodyParser = require('body-parser');
const dotenv = require('dotenv');
const logger = require('./middleware/logger');
dotenv.config({path: './config'});
const errHandler = require('./middleware/errorHandler');

const PORT = process.env.PORT || 8090;

const app = express();
app.use(express.json());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(logger);



const dogsRouter = require('./routes/dogs');
app.use('/dogs', dogsRouter);
const ownerRouter = require('./routes/owner');
app.use('/owner', ownerRouter);

app.use(errHandler);

app.listen(PORT, () => {
    console.log(`Dog server is running on port: ${PORT}`); 
  });

