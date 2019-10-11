module.exports = (app) => {
    const users = require('../controllers/user.controller.js');

    // Create new user
    app.post('/api/v1/create_user', users.create_user);

    // Retrieve all user
    app.get('/api/v1/show_users', users.findAll_user);

    // Retrieve single user with userId
    app.get('/api/v1/show_user/:userId', users.findOne_user);

    // Update user with userId
    app.put('/api/v1/update_user/:userId', users.update_user);

    // Delete user with userId
    app.delete('/api/v1/delete_user/:userId', users.delete_user);
}
