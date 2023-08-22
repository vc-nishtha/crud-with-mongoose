const User = require("../model/user.schema");

exports.addUser = async function addUser(req, res) {
    try {
        const user = new User(req.body);
        await user.save();
        res.status(200).send({
            message: "User add successfully!",
        });
    } catch (error) {
        res.status(400).send({
            message: "Bad Request",
            error: [error],
        });
    }
};

exports.updateUser = async function updateUser(req, res) {
    try {
        await User.updateOne({ _id: req.body.id }, req.body);
        res.status(200).send({
            message: "User update successfully!"
        });
    } catch (error) {
        res.status(400).send({
            message: "bad request",
            error: [error],
        });
    }
};

exports.deleteUser = async function deleteUser(req, res) {
    try {
        await User.findOneAndDelete({ _id: req.params.id });
        res.status(200).send({
            message: "User delete successfully!"
        });
    } catch (error) {
        res.status(400).send({
            message: "bad request",
            error: [error],
        });
    }
};

exports.getUser = async function getUser(req, res) {
    try {
        const userList = await User.find();
        res.status(200).send({
            message: "User list get successfully!",
            data: userList,
        });
    } catch (error) {
        res.status(400).send({
            message: "bad request",
            error: [error],
        });
    }
};