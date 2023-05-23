const jwt = require("../jwt/jwt");

const auth = (req, res, next) => {
  var token = req.cookies.token

  if (token) {
    const user = jwt.verify(token);
    req.body.email= user.email
    next();
  } else {
    res.status(401).json({
      message: "Unauthorized User",
    });
  }

};

module.exports = auth
