const User = require('../models/user.model.js');
const Contact = require('../models/contact.model.js');

// Create New User
exports.create_user = (req, res) => {
    if(!req.body.name) {
        return res.status(400).send({
            message: "User can't be empty"
        })
    }

    const contact = new Contact({
        name: req.body.name,
        mobile: req.body.mobile,
        designation: req.body.designation
    });
    const user = new User ({
        name: req.body.name,
        age: req.body.age,
        gender: req.body.gender,
        email: req.body.email
    });
    contact.save().then(data => {
        user.contact = contact._id;
        user.save().then(data => {
            res.send(data);
        }).catch(err => {
            res.status(500).send({
                message: err.message || "ERROR"
            });
        }); 
    });
        
};

// Show all users
exports.findAll_user = (req, res) => {
    User.find().populate('contact').exec().then(users => res.json(users));
};


// Show single user
exports.findOne_user = (req, res) => {
    User.findOne({ _id: (req.params.userId)}).populate('contact').exec().then(users => res.json(users));
};

//Update user
exports.update_user = (req, res) => {
    var userId =  { _id: req.params.userId};
    const newusers = { $set: {
        name: req.body.name,
        age: req.body.age,
        gender: req.body.gender,
        email: req.body.email
    } };

    User.findById(userId).then((userdata) => {
        var cont = userdata.contact;
        var contactId = {_id: cont};
        var userId =  { _id: req.params.userId};
        const newcontacts = { $set: {
            name: req.body.name,
            mobile: req.body.mobile,
            designation: req.body.designation
        } };
        Contact.findById(contactId).then((contactdata) => {
            const user = User.updateOne(userId, newusers);
            const contact = Contact.updateOne(contactId, newcontacts);
            Promise.all([user, contact]).then(result =>{
                res.status(200).json({
                message: 'Update',
            });
            }).catch(err => {
                console.error(err);
                res.status(500).json({
                    error: err
            });
        })
        })
    })
}

// Delete User
exports.delete_user = (req, res) => {
    var userId =  req.params.userId;
    User.findById(userId).then((user) => {
        var contactId = user.contact;
        Contact.findById(contactId).then((data) => {
            const user = User.deleteOne({ _id: userId });
            const contact = Contact.deleteOne({ _id: contactId });
                Promise.all([user, contact]).then(result =>{
                    res.status(200).json({
                    message: 'deleted',
                });
                }).catch(err => {
                    console.error(err);
                    res.status(500).json({
                        error: err
                });
            })
        })
    });
}


