'use strict'
let mongoose = require('mongoose');
let Schema = mongoose.Schema;

let userSchema = new Schema({

    name: String,
    lastname: String,
    tel: String,
    email: String,
    image: String

});

mongoose.model('user',userSchema);