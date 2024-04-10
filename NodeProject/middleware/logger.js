const moment = require('moment');

const logger = (req, res, next) => {
    const timestamp = moment().format('DD-MM-YYYY HH:mm:ss');
    console.log(` ${timestamp}: ${req.protocol} ${req.method} was made to url ${req.originalUrl}`);
    next();
}


module.exports = logger;