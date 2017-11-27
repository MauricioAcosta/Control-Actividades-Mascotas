'use strict'

let ctrl = require('../controllers/index.controller')

module.exports = function (app) {

    app.route("/home")
        .get(ctrl.getRoute)
        .post(ctrl.postRoute);

    app.route("/")
        .get(ctrl.renderLogin)
        .post(ctrl.login);
}