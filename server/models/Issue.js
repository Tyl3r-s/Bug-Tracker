const mongoose = require('mongoose');
const { Schema } = mongoose;
const dateFormat = require('../utils/dateFormat');

const entrySchema = new Schema({
    title: {
        type: String,
        required: true
    },
    bugDesc: {
        type: String,
        required: true
    },
    createdAt: {
        type: Date,
        default: Date.now,
        get: createdAtVal => dateFormat(createdAtVal)
    },
    severity: {
        type: String,
        required: true
    }
});

const Entry = mongoose.model('Entry', entrySchema);

module.exports = Entry;