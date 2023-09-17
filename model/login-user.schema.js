const mongoose = require('mongoose');

const LoginUserSchema = new mongoose.Schema({
    userName: {
        type: String,
        required: true,
        unique: true
    },
    email: {
        type: String,
        required: true
    },
    password: {
        type: String,
        required: true
    }
});

const LoginUser = mongoose.model('LoginUser', LoginUserSchema);
module.exports = LoginUser;