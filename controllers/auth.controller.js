const LoginUser = require('../model/login-user.schema');
const jwt = require('jsonwebtoken');
const bcrypt = require('bcrypt');
require('dotenv').config();

exports.signupUser = async function signupUser(req, res) {
    try {
        let existingUser = await LoginUser.findOne({
            email: req.body.email,
        });
        if (existingUser) {
            res.status(409).send({
                message: 'Email already exists!',
            });
            return;
        }
        const hashedPassword = await bcrypt.hash(req.body.password, 10);
        const newUser = new LoginUser(req.body);
        newUser.password = hashedPassword;
        const userDetails = newUser.save();
        res.status(200).send({
            message: 'User registered successfully!',
            data: userDetails
        });
    } catch (err) {
        res.status(400).send({
            message: "Please check required field!",
            error: err,
        });
    }
}

exports.loginUser = async function loginUser(req, res) {
    try {
        let userData = await LoginUser.findOne({
            email: req.body.email,
        });
        if (!userData) {
            res.status(404).send({
                message: 'User not found,Please register yourself self!'
            });
            return;
        }
        const passwordMatch = await bcrypt.compare(req.body.password, userData.password);
        const payload = {
            id: userData._id,
            email: userData.email,
            password: userData.password
        };
        if (!passwordMatch) {
            res.status(401).send({
                message: 'Your password is incorrect, please check!'
            });
            return;
        }
        jwt.sign(
            payload,
            process.env.SECRET_KEY,
            { expiresIn: 3600 * 24 },
            (err, token) => {
                if (err) {
                    throw err;
                }
                res.status(200).send({
                    message: "User login successfully!",
                    token: token,
                });
            }
        );
    } catch (error) {
        res.status(400).send({
            message: "Please enter valid email or password!",
            error: [error],
        });
    }
};