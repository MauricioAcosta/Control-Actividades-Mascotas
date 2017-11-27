'use strict'
let users = require('mongoose').model('user');
exports.getUsers = function (req, res, next) {
    users.find({}, function (err, data) {
        if (err) {
            console.log(err);
        } else {
            res.json(data);
        }
    })
}

exports.createUser = function (req, res, next) {
    let user = new users(req.body);
    user.save({}, function (err, data) {
        if (err) {
            console.log(err);
        } else {
            // res.json(user);
            res.redirect('/#/inicio');
        }
    })
}

exports.getUserByID = function (req, res, next, _id) {
    users.findById(_id, function (err, user) {
        if (err) {
            console.log(err);
            return next(err);
        } else {
            req.user = user;
            next();
        }
    });
};
exports.userById = function (req, res) {
    res.json(req.user);
};
exports.updateUser = function (req, res, next) {
    var date = new Date();
    date.toISOString();
    req.body.Updated = date;
    users.findByIdAndUpdate(req.user._id, req.body, function (err, user) {
        if (err) {
            return next(err);
        } else {
            res.json(req.body);
        }
    });
};
exports.deleteUser = function (req, res, next) {
    req.user.remove(function (err) {
        if (err) {
            return next(err);
        } else {
            res.json(req.user);
        }
    });
};
