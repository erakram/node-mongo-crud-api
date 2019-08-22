const Contact = require('../models/contact.model.js');


exports.create_contact = (req, res) => {
    
    if(!req.body.name) {
        return res.status(400).send({
            message: "User can not be empty"
        });
    }
    
    const contact = new Contact({
        name: req.body.name,
        mobile: req.body.mobile,
        designation: req.body.designation
    });

    contact.save()
    .then(data => {
        res.send(data);
    }).catch(err => {
        res.status(500).send({
            message: err.message || "Some error occurred while creating the User."
        });
    });
};
// Retrieve and return all notes from the database.
exports.findAll_contact = (req, res) => {

};

// Find a single note with a noteId
exports.findOne_contact = (req, res) => {

};

// Update a note identified by the noteId in the request
exports.update_contact = (req, res) => {

};

// Delete a note with the specified noteId in the request
exports.delete_contact = (req, res) => {

};