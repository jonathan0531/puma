"use strict";

module.exports.register = async (server) => {
  server.route({
    method: "GET",
    path: "/api/donor",

    config: {
      handler: async (request) => {
        try {
          // get the sql client registered as a plugin

          const db = request.server.plugins.sql.client;

          // TODO: Get the current authenticate user's ID
          //const userId = "user1234";

          // execute the query
          const res = await db.donor.getDonor();

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
    path: "/api/donor/{donor_id}",
    config: {
      handler: async (request) => {
        try {
          const donor_id = request.params.donor_id;
          const db = request.server.plugins.sql.client;
          const res = await db.donor.getOneDonor({ donor_id });
          return res.recordset;
        } catch (err) {
          console.log(err);
        }
      },
    },
  });

  server.route({
    method: "DELETE",
    path: "/api/donor/{donor_id}",
    handler: async (request, h) => {
      try {
        const donor_id = request.params.donor_id;
        const db = request.server.plugins.sql.client;
        const res = await db.donor.deleteDonor({ donor_id });

        return res.rowsAffected[0] === 1;
      } catch (err) {
        console.log(err);
      }
    },
  });
};
