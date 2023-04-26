const mongoose = require('mongoose');
const { Schema } = mongoose;
const dateFormat = require('../utils/dateFormat');

const entrySchema = new Schema({
    comment: {
        type: String,
        required: true
    }
});

const Entry = mongoose.model('Entry', entrySchema);

module.exports = Entry;