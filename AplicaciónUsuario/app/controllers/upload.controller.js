'use strict'

exports.upload = function (req, res, next) {
    res.send(req.files);
}