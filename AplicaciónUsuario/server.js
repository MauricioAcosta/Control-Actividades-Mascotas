'use strict'
console.log("Connecting...");

let mongoose = require("./configs/mongoose");
let express = require("./configs/express");

let db = mongoose();
let app = express();

app.listen(process.env.PORT || 2020, function () {

});
console.log("server is runing http://localhost:2020");
console.log("Connecting... , OK.");