if(process.env.NODE_ENV === 'production'){
    module.exports = require('./creds_prod');
    }
    else{
    module.exports = require('./creds_dev');
    }