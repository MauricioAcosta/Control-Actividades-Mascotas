'use strict'

const mongoose = require('mongoose');
const MONGODB_URI = process.env.MONGODB_URI || "mongodb://localhost:27017/mongoosedb"

module.exports = function () {

    mongoose.set('debug', true);

    let db = mongoose.connect(MONGODB_URI, function (err) {
        if (err) {
            console.log("mongodb Unconnected.." + err);
        } else {
            console.log("mongodb connected.. ,OK.");
        }
    });
    
    require('../app/models/user.model');

    return db;

}