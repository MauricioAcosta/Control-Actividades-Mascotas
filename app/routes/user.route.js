'use strict'
let ctrl = require('../controllers/user.controller')
module.exports = function (app) {

    app.route("/api/user")
        .get(ctrl.getUsers)
        // .post(ctrl.createUser);

    app.route("/api/user/:_id")
        .get(ctrl.userById)
        .put(ctrl.updateUser)
        .delete(ctrl.deleteUser);

    app.param("_id", ctrl.getUserByID);

}