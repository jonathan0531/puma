"use strict";

module.exports.register = async (server) => {
  server.route({
    method: "GET",
    path: "/api/lookback",

    config: {
      handler: async (request) => {
        try {
          // get the sql client registered as a plugin

          const db = request.server.plugins.sql.client;

          // execute the query
          const res = await db.lookback.getLookback();

          // return the recordset object
          return res.recordset;
        } catch (err) {
          console.log(err);
        }
      },
    },
  });
};
