'use strict'

const express = require('express');
const bodyParser = require('body-parser');

module.exports = function () {

    let app = express();

    app.use(bodyParser.urlencoded({
        extended: true
    }));

    app.use(bodyParser.json());

    app.set('views', ['./app/views', './public']);
    app.set('view engine', 'jade');

    require('../app/routes/index.route')(app);
    require('../app/routes/user.route')(app);
    require('../app/routes/upload.route')(app);
    require('../app/routes/partial.route')(app);
    app.use(express.static('./public'));

    return app;

}