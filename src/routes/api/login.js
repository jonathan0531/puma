"use strict";

module.exports.register = async (server) => {
  server.route({
    method: "GET",
    path: "/api/login",

    config: {
      handler: async (request) => {
        try {
          // get the sql client registered as a plugin

          const db = request.server.plugins.sql.client;

          // TODO: Get the current authenticate user's ID
          //const userId = "user1234";

          // execute the query
          const res = await db.login.getLogin();

          // return the recordset object
          return res.recordset;
        } catch (err) {
          console.log(err);
        }
      },
    },
  });

  server.route({
    method: "POST",
    path: "/api/login",
    handler: async (request) => {
      try {
        const db = request.server.plugins.sql.client;
        const { email, password } = request.payload;
        const res = await db.login.addLogin({
          email,
          password,
        });
        return res.recordset[0];
      } catch (err) {
        console.log(err);
      }
    },
  });
};
