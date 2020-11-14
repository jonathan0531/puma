"use strict";

const donor = require("./donor");
const login = require("./login");
const resultset = require("./resultset");
const component = require("./component");
const test = require("./test");
const tracking = require("./tracking");
const disease_config = require("./disease_config");
const pending = require("./pending");
const completed = require("./completed");
const lookback = require("./lookback");

module.exports.register = async (server) => {
  await donor.register(server);
  await login.register(server);
  await resultset.register(server);
  await component.register(server);
  await test.register(server);
  await tracking.register(server);
  await disease_config.register(server);
  await pending.register(server);
  await completed.register(server);
  await lookback.register(server);
};
