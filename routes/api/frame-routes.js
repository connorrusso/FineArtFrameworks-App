// Dependencies
// ------------------------------------------------------------------------
var db = require("../../models");
// Routes for /api/frames 
// ------------------------------------------------------------------------
module.exports = function (app) {
    // Get all frames
    app.get("/api/frames", function (req, res) {
        db.frame.findAll({}).then(function (dbFrames) {
            res.json(dbFrames);
        });
    });
    // Get all frames with a specific order_id
    app.get("/api/frames/order/:id", function (req, res) {
        db.frame.findAll({
            where: {
                order_id: req.params.id
            }
        })
        .then(function (dbFrames) {
            res.json(dbFrames);
        })
    });
    // Get all frames with a specific temp_id
    app.get("/api/frames/temp/:id", function (req, res) {
        db.frame.findAll({
            where: {
                temp_id: req.params.id
            }
        })
        .then(function (dbFrames) {
            res.json(dbFrames);
        })
    });
    // Get frame by frame-id
    app.get("/api/frames/:id", function (req, res) {
        db.frame.findOne({
            where: {
                id: req.params.id
            }
        })
            .then(function (dbFrames) {
                res.json(dbFrames);
            })
    });
    // Create a new frame
    app.post("/api/frames", function (req, res) {
        db.frame.create(req.body).then(function (dbFrames) {
            res.json(dbFrames);
        });
    });
    // Delete a frame by id
    app.delete("/api/frames/:id", function (req, res) {
        db.frame.destroy({
            where: {
                id: req.params.id
            }
        })
            .then(function (dbFrames) {
                res.json(dbFrames);
            });
    });
    // Update a frame by id
    app.put("/api/frames", function (req, res) {
        db.frame.update(
            req.body,
            {
                where: {
                    id: req.body.id
                }
            }).then(function (dbFrames) {
                res.json(dbFrames);
            });
    });
};