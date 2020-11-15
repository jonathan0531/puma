"use strict";

module.exports.register = async (server) => {
  server.route({
    method: "GET",
    path: "/api/completed",

    config: {
      handler: async (request) => {
        try {
          // get the sql client registered as a plugin

          const db = request.server.plugins.sql.client;

          // execute the query
          const res = await db.completed.getCompleted();

          // return the recordset object
          return res.recordset;
        } catch (err) {
          console.log(err);
        }
      },
    },
  });

  server.route({
    method: "GET",
    path: "/api/completed/{Lookback_ID}",
    config: {
      handler: async (request) => {
        try {
          const Lookback_ID = request.params.Lookback_ID;
          const db = request.server.plugins.sql.client;
          const res = await db.completed.getOneCompleted({ Lookback_ID });
          return res.recordset[0];
        } catch (err) {
          console.log(err);
        }
      },
    },
  });
};
