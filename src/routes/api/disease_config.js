"use strict";

module.exports.register = async (server) => {
  server.route({
    method: "GET",
    path: "/api/disease_config",

    config: {
      handler: async (request) => {
        try {
          // get the sql client registered as a plugin

          const db = request.server.plugins.sql.client;

          // TODO: Get the current authenticate user's ID
          //const userId = "user1234";

          // execute the query
          const res = await db.disease_config.getDisease();

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
    path: "/api/disease_config/{Disease_ID}",
    config: {
      handler: async (request) => {
        try {
          const Disease_ID = request.params.Disease_ID;
          const db = request.server.plugins.sql.client;
          const res = await db.disease_config.getOneDisease({ Disease_ID });
          return res.recordset[0];
        } catch (err) {
          console.log(err);
        }
      },
    },
  });

  server.route({
    method: "POST",
    path: "/api/disease_config",
    handler: async (request) => {
      try {
        const db = request.server.plugins.sql.client;
        const {
          Disease_ID,
          Disease_Desc,
          Lookback_Min,
          Lookback_Max,
          Confirm_Needed,
          Recip_Tracing,
          Follow_Up_Days,
          Exception_Comments,
          RT_LETTER,
          RT_ON_IND_RESULT,
        } = request.payload;
        const res = await db.disease_config.addDisease({
          Disease_ID,
          Disease_Desc,
          Lookback_Min,
          Lookback_Max,
          Confirm_Needed,
          Recip_Tracing,
          Follow_Up_Days,
          Exception_Comments,
          RT_LETTER,
          RT_ON_IND_RESULT,
        });
        return res.recordset[0];
      } catch (err) {
        console.log(err);
      }
    },
  });

  server.route({
    method: "PUT",
    path: "/api/disease_config/{disease_id}",
    handler: async (request, h) => {
      try {
        const disease_id = request.params.disease_id;
        const db = request.server.plugins.sql.client;
        const res = await db.disease_config.updateDisease({ disease_id });
        return res.rowsAffected[0] === 1;
      } catch (err) {
        console.log(err);
      }
    },
  });

  server.route({
    method: "DELETE",
    path: "/api/disease/{disease_id}",
    handler: async (request, h) => {
      try {
        const disease_id = request.params.disease_id;
        const db = request.server.plugins.sql.client;
        const res = await db.disease_config.deleteDisease({ disease_id });

        return res.rowsAffected[0] === 1;
      } catch (err) {
        console.log(err);
      }
    },
  });
};
