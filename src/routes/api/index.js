"use strict";

const donor = require("./donor");

module.exports.register = async (server) => {
  await donor.register(server);
};
