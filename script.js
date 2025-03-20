const jwt = require("jsonwebtoken")

const encrypt = (payload, secret) => {
  // your code here and return token
  const token = jwt.sign(payload,secret, {expiresIn: '60s'});
  return token
};


const payload = {username : 'john doe'}

const secretkey = "secret";

const token = encrypt(payload , secretkey)

console.log("JWT token" , token)

module.exports = encrypt;
