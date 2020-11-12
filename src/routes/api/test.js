"use strict";

module.exports.register = async (server) => {
  server.route({
    method: "GET",
    path: "/api/test",

    config: {
      handler: async (request) => {
        try {
          const db = request.server.plugins.sql.client;
          const res = await db.test.getTest();
          return res.recordset;
        } catch (err) {
          console.log(err);
        }
      },
    },
  });

  server.route({
    method: "GET",
    path: "/api/test/{Test_ID}",
    config: {
      handler: async (request) => {
        try {
          const Test_ID = request.params.Test_ID;
          const db = request.server.plugins.sql.client;
          const res = await db.test.getOneTest({ Test_ID });
          return res.recordset[0];
        } catch (err) {
          console.log(err);
        }
      },
    },
  });

  server.route({
    method: "POST",
    path: "/api/test",
    handler: async (request) => {
      try {
        const db = request.server.plugins.sql.client;
        const {
          Test_ID,
          Result_Set,
          Test_Count,
          Disease_ID,
          Supplemental,
        } = request.payload;
        const res = await db.test.addTest({
          Test_ID,
          Result_Set,
          Test_Count,
          Disease_ID,
          Supplemental,
        });
        return res.recordset[0];
      } catch (err) {
        console.log(err);
      }
    },
  });

  server.route({
    method: "PUT",
    path: "/api/test/{Test_ID}",
    handler: async (request, h) => {
      try {
        const db = request.server.plugins.sql.client;
        const {
          Test_ID = request.params.Test_ID,
          Result_Set,
          Test_Count,
          Disease_ID,
          Supplemental,
        } = request.payload;
        const res = await db.test.updateTest({
          Test_ID,
          Result_Set,
          Test_Count,
          Disease_ID,
          Supplemental,
        });
        return res.recordset[0];
      } catch (err) {
        console.log(err);
      }
    },
  });
};
