"use strict";

module.exports.register = async (server) => {
  server.route({
    method: "GET",
    path: "/api/resultset",

    config: {
      handler: async (request) => {
        try {
          const db = request.server.plugins.sql.client;
          const res = await db.resultset.getRS();
          return res.recordset;
        } catch (err) {
          console.log(err);
        }
      },
    },
  });

  server.route({
    method: "POST",
    path: "/api/resultset",
    handler: async (request) => {
      try {
        const db = request.server.plugins.sql.client;
        const {
          Result_Set,
          Result,
          Result_Value,
          Value_Desc,
          Nat_Result,
          Nat_Count,
          Conf_Result,
          Conf_Count,
          Repeat_Result,
          Repeat_Count,
        } = request.payload;
        const res = await db.resultset.addRS({
          Result_Set,
          Result,
          Result_Value,
          Value_Desc,
          Nat_Result,
          Nat_Count,
          Conf_Result,
          Conf_Count,
          Repeat_Result,
          Repeat_Count,
        });
        return res.recordset[0];
      } catch (err) {
        console.log(err);
      }
    },
  });
};
