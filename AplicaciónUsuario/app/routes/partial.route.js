'use strict'

let partial = require('../controllers/partial.controller');

module.exports = function (app) {

    app.get('/modules/:module/views/:partial', partial.render);

}