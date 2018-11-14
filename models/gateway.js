const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const GatewaySchema = new Schema({
    name: 
        {
            type: String        
        },
    password:
        {
            type: String
        }    
});

const Gateway = mongoose.model('gateway', GatewaySchema);

module.exports = Gateway;