const mongoose = require('mongoose');

const ContactSchema = mongoose.model({
    name: String,
    mobile: String,
    designation: String
});

module.exports = mongoose.model('Contact', ContactSchema);