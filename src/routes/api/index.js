"use strict";

const donor = require("./donor");
const blood = require("./blood");
const login = require("./login");
const resultset = require("./resultset");

module.exports.register = async (server) => {
  await donor.register(server);
  await blood.register(server);
  await login.register(server);
  await resultset.register(server);
};
