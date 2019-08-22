module.exports = (app) => {
    const users = require('../controllers/user.controller.js');

    // Create a new Note
    app.post('/create_user', users.create_user);

    // Retrieve all Notes
    app.get('/show_users', users.findAll_user);

    // Retrieve a single Note with noteId
    app.get('/show_user/:userId', users.findOne_user);

    // Update a Note with noteId
    app.put('/update_user/:userId', users.update_user);

    // Delete a Note with noteId
    app.delete('/delete_user/:userId', users.delete_user);
}