'use strict'

exports.render = function (req, res) {
    console.dir(req.path);
    res.render('.' + req.path);
};