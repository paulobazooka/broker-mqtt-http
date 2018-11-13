const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const SensorSchema = new Schema({
    name: String,
    identification: String,
    description: String,
    measure: String,
    FFTAlarm1: Number,
    FFTAlarm2: Number,
    GlobalAlarm1: Number,
    GlobalAlarm2: Number,
    emptyVibration1: {
        type: Number,
        default: ''
    },
    emptyVibration2: {
        type: Number,
        default: ''
    },
    KAMultiplicator: Number,
    KBMultiplicator: Number,
    ADMultiplicator: Number,
    measureType: {
        type: String,
        default: 'M'
    },
    digitalFilter: Number,
    FFTGain: Number,
    accelerometerLimit: Number,
    fireSystem: Number,
    reservedThermometer: {
        type: Number,
        default: 0
    },
    reservedCurrentAC: {
        type: Number,
        default: 0
    },
    reservedCurrentDC: {
        type: Number,
        default: 0
    },
    reservedPulseCounter: {
        type: Number,
        default: 0
    },
    reservedHourMeter: {
        type: Number,
        default: 0
    },
    Active: {
        type: Number,
        default: 1
    },
    notUsed1: {
        type: Number,
        default: 0
    },

});

const Sensor = mongoose.model('sensor', SensorSchema);

module.exports = Sensor;