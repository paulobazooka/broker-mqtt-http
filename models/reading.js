const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const ReadingSchema = new Schema({
    
    sensor: 
        {
            type: Schema.Types.ObjectId,
            ref: 'sensor'
        },
    timestamp: 
        {
            type: Date,
            default: Date.now()
        },
    reading:
        {
            type: String,
            default: ''        
        }

});

const Reading = mongoose.model('reading', ReadingSchema);

module.exports = Reading;