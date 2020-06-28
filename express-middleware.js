var excludedPaths = ["/city", "/city/add", "/city/filter"];
var models = require("./models");

module.exports = options => {
  var middleware = (req, res, next) => {
    const bearerHeader = req.headers["authorization"];
    if (excludedPaths.indexOf(req.originalUrl.toLowerCase()) != -1) {
      console.log("Excluded API");
      next();
    } else if (
      typeof bearerHeader !== "undefined" 
    ) {
     // To add Api authentication e.g Token
    } else {
      var resp = {
        status: 403,
        description: "Invalid Request !! Please check !!"
      };
      res.send(resp);
    }
  };
  return middleware;
};

