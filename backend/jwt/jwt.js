const jwt = require("jsonwebtoken");
const SECRET_KEY = "NOTESAPP";

const signin = (email) => {
  return jwt.sign({ email: email }, SECRET_KEY);
};

const verify = (token) => {
  return jwt.verify(token, SECRET_KEY);
};


module.exports = {signin, verify}
