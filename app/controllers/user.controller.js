const User = require('../models/user.model.js');


exports.create_user = (req, res) => {
    
    if(!req.body.name) {
        return res.status(400).send({
            message: "User can not be empty"
        });
    }
    
    const user = new User({
        name: req.body.name,
        age: req.body.age,
        gender: req.body.gender,
        email: req.body.email
    });

    user.save()
    .then(data => {
        res.send(data);
    }).catch(err => {
        res.status(500).send({
            message: err.message || "Some error occurred while creating the User."
        });
    });
};
// Retrieve and return all notes from the database.
exports.findAll_user = (req, res) => {

};

// Find a single note with a noteId
exports.findOne_user = (req, res) => {

};

// Update a note identified by the noteId in the request
exports.update_user = (req, res) => {

};

// Delete a note with the specified noteId in the request
exports.delete_user = (req, res) => {

};