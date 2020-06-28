
var CityController = function () { };
var models = require("../models");
var importController = require("./importController.js");
var jwt = require("jsonwebtoken");

/*
Desc : Function to create new city 
@params : [
    {"id":1,"city":"Santa Cruz","start_date":"8/8/2011","end_date":"11/1/2014","price":"7.95","status":"Yearly","color":"#e4db7f"},
    ....]
*/
CityController.prototype.addCity = (params, callback) => {
    return new Promise((resolve, reject) => {
        models.city.bulkCreate(params).then(item => {
            resolve(new importController.responselistner(null, item));
        }).catch(error => {
            reject(new importController.responselistner(500, error));
        });
    });
};

/*
Desc : Function which will return all available Cities
@params : 
*/
CityController.prototype.getAllCities = () => {
    return new Promise((resolve, reject) => {
        models.city.findAll().then(category => {
            resolve(new importController.responselistner(null, category));
        });
    });
};

/*
Desc : Function which will return cities by start date and end date
@params : 
*/
CityController.prototype.getCityByDate = (params, callback) => {
    return new Promise((resolve, reject) => {
        if (params.start_date && params.end_date) {
            models.city.findAll({
                where: {
                    start_date: {
                        "$between": [params.start_date, params.end_date]
                    }
                }
            }).then(item => {
                resolve(new importController.responselistner(null, item));
            })
                .catch(error => {
                    reject(new importController.responselistner(404, "User Not found"));
                });
        } else {
            models.city.findAll().then(category => {
                resolve(new importController.responselistner(null, category));
            });
        }
    });
};



module.exports = CityController;

