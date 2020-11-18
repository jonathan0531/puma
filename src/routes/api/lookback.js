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

  server.route({
    method: "GET",
    path: "/api/lookback/{Lookback_ID}",
    config: {
      handler: async (request) => {
        try {
          const Lookback_ID = request.params.Lookback_ID;
          const db = request.server.plugins.sql.client;
          const res = await db.lookback.getOneLookback({ Lookback_ID });
          return res.recordset[0];
        } catch (err) {
          console.log(err);
        }
      },
    },
  });

  server.route({
    method: "GET",
    path: "/api/nat/{Lookback_ID}",
    config: {
      handler: async (request) => {
        try {
          const Lookback_ID = request.params.Lookback_ID;
          const db = request.server.plugins.sql.client;
          const res = await db.lookback.getNatLookback({ Lookback_ID });
          return res.recordset[0];
        } catch (err) {
          console.log(err);
        }
      },
    },
  });

  server.route({
    method: "GET",
    path: "/api/init/{Lookback_ID}",
    config: {
      handler: async (request) => {
        try {
          const Lookback_ID = request.params.Lookback_ID;
          const db = request.server.plugins.sql.client;
          const res = await db.lookback.getInitLookback({ Lookback_ID });
          return res.recordset[0];
        } catch (err) {
          console.log(err);
        }
      },
    },
  });

  server.route({
    method: "PUT",
    path: "/api/lookback/{Lookback_ID}",
    handler: async (request, h) => {
      try {
        const db = request.server.plugins.sql.client;
        const { Lookback_ID = request.params.Lookback_ID } = request.payload;
        const res = await db.lookback.updateLookback({
          Lookback_ID,
        });
        return res.recordset[0];
      } catch (err) {
        console.log(err);
      }
    },
  });
};
