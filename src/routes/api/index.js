"use strict";

const donor = require("./donor");
const blood = require("./blood");
const login = require("./login");
const disease_config = require("./disease_config");

module.exports.register = async (server) => {
  await donor.register(server);
  await blood.register(server);
  await login.register(server);
  await disease_config.register(server);
};
