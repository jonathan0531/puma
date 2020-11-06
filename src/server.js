"use strict";

const Hapi = require("hapi");
const plugins = require("./plugins");
const routes = require("./routes");

const app = async (config) => {
  const { host, port } = config;

  // create an instance of hapi
  const server = Hapi.server({
    host,
    port,
    routes: {
      cors: {
        origin: ["*"], // an array of origins or 'ignore'
        headers: ["Authorization"], // an array of strings - 'Access-Control-Allow-Headers'
        exposedHeaders: ["Accept"], // an array of exposed headers - 'Access-Control-Expose-Headers',
        additionalExposedHeaders: ["Accept"], // an array of additional exposed headers
        maxAge: 60,
        credentials: true, // boolean - 'Access-Control-Allow-Credentials'
      },
    },
  });

  // store the config for later use
  server.app.config = config;

  // register plugins
  await plugins.register(server);

  // register routes
  await routes.register(server);

  return server;
};

module.exports = app;
