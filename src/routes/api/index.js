"use strict";

const donor = require("./donor");
const login = require("./login");
const resultset = require("./resultset");

module.exports.register = async (server) => {
  await donor.register(server);
  await login.register(server);
  await resultset.register(server);
};
