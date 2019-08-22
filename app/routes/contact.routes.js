module.exports = (app) => {
    const contacts = require('../controllers/contact.controller.js');

    // Create a new Note
    app.post('/create_contact', contacts.create_contact);

    // Retrieve all Notes
    app.get('/show_contacts', contacts.findAll_contact);

    // Retrieve a single Note with noteId
    app.get('/show_contact/:contactId', contacts.findOne_contact);

    // Update a Note with noteId
    app.put('/update_contact/:contactId', contacts.update_contact);

    // Delete a Note with noteId
    app.delete('/delete_contact/:contactId', contacts.delete_contact);
}