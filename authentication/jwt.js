const jwt = require("jsonwebtoken");

const secret = "e9rp^&^*&@9sejg)DSUA)jpfds8394jdsfn,m";

function toJWT(data) {
  return jwt.sign(data, secret, { expiresIn: "2h" });
}
function toData(token) {
  return jwt.verify(token, secret);
}
module.exports = { toJWT, toData };
