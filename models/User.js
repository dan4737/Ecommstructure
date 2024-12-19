const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({
    username: { type: String, required: true, unique: true },
    password: { type: String, required: true },
    role: { type: String, default: 'user' }, // Default is 'user'; Admins will have 'admin' role
});

module.exports = mongoose.model('User', userSchema);
