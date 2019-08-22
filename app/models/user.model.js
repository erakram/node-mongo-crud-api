const mongoose = require('mongoose');

const UserSchema = mongoose.Schema({
    name: String,
    age: String,
    gender: String,
    email: String
});

module.exports = mongoose.model('User', UserSchema);