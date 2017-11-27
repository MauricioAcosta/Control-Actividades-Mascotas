'use strict'

let db = require('mongoose');
let ctrl = require('../controllers/upload.controller')
let users = db.model('user');
let conn = db.connection;
let gfs;
var fs = require("fs");
let multer = require("multer");
let upload = multer({ dest: "./public/uploads" });
let Grid = require("gridfs-stream");
Grid.mongo = db.mongo;

module.exports = function (app) {

    conn.once("open", function () {
        gfs = Grid(conn.db);
        //second parameter is multer middleware.
        app.post("/api/user", upload.single("file"), function (req, res, next) {
            //create a gridfs-stream into which we pipe multer's temporary file saved in uploads. After which we delete multer's temp file.
            var writestream = gfs.createWriteStream({
                filename: req.file.originalname
            });

            fs.createReadStream("./public/uploads/" + req.file.filename)
                .on("end", function () {
                    fs.unlink("./uploads/" + req.file.filename, function (err) {
                        let user = new users(req.body);
                        user.image = req.file.originalname;
                        user.save({}, function (err, data) {
                            if (err) {
                                console.log(err);
                            } else {
                                // res.json(user);
                                res.redirect('/#/home');
                            }
                        })
                    })
                })
                .on("err", function () {
                    res.send("Error uploading image")
                })
                .pipe(writestream);

        });

        app.get("/image/:filename", function (req, res) {
            var readstream = gfs.createReadStream({ filename: req.params.filename });
            readstream.on("error", function (err) {
                res.send("No image found with that title");
            });
            readstream.pipe(res);
        });
    });

}