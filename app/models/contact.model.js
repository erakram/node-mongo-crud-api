const mongoose = require('mongoose');

const ContactSchema = mongoose.Schema({
    name: String,
    mobile: String,
    designation: String
});

module.exports = mongoose.model('Contact', ContactSchema);