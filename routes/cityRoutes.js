var express = require('express');
var router = express.Router();
var models = require('../models');
var cityController = require("../controller/cityController.js");

// Add City
router.post("/add", (req, res) => {
    city = new cityController();
    const initializePromise = city.addCity(req.body);
    initializePromise.then(
        result => {
            res.send(result);
        },
        err => {
            res.send(err);
        }
    );
});

// Get all Cities
router.get("/", (req, res) => {
    city = new cityController();
    const initializePromise = city.getAllCities();
    initializePromise.then(
        result => {
            res.send(result);
        },
        err => {
            res.send(err);
        }
    );
});

// Get city by date
router.post("/filter", (req, res) => {
    item = new cityController();
    const initializePromise = item.getCityByDate(req.body);
    initializePromise.then(
        result => {
            res.send(result);
        },
        err => {
            res.send(err);
        }
    );
});

module.exports = router;