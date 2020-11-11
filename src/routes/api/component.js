"use strict";

module.exports.register = async (server) => {
  server.route({
    method: "GET",
    path: "/api/component",

    config: {
      handler: async (request) => {
        try {
          const db = request.server.plugins.sql.client;
          const res = await db.component.getComp();
          return res.recordset;
        } catch (err) {
          console.log(err);
        }
      },
    },
  });

  server.route({
    method: "GET",
    path: "/api/component/{Disease_ID}",
    config: {
      handler: async (request) => {
        try {
          const Disease_ID = request.params.Disease_ID;
          const db = request.server.plugins.sql.client;
          const res = await db.component.getOneComp({ Disease_ID });
          return res.recordset[0];
        } catch (err) {
          console.log(err);
        }
      },
    },
  });

  server.route({
    method: "POST",
    path: "/api/component",
    handler: async (request) => {
      try {
        const db = request.server.plugins.sql.client;
        const {
          Disease_ID,
          RBCIN,
          PLTIN,
          PLAIN,
          SLEUKIN,
          RPIN,
          SPLAIN,
          FPLTIN,
          RBCINV,
          PLTINV,
          PLAINV,
          SLEUKINV,
          RPINV,
          SPLAINV,
          FPLTINV,
          RBCOUT,
          PLTOUT,
          PLAOUT,
          SLEUKOUT,
          RPOUT,
          SPLAOUT,
          FPLTOUT,
          Do_Init,
          Do_Look,
        } = request.payload;
        const res = await db.component.addComp({
          Disease_ID,
          RBCIN,
          PLTIN,
          PLAIN,
          SLEUKIN,
          RPIN,
          SPLAIN,
          FPLTIN,
          RBCINV,
          PLTINV,
          PLAINV,
          SLEUKINV,
          RPINV,
          SPLAINV,
          FPLTINV,
          RBCOUT,
          PLTOUT,
          PLAOUT,
          SLEUKOUT,
          RPOUT,
          SPLAOUT,
          FPLTOUT,
          Do_Init,
          Do_Look,
        });
        return res.recordset[0];
      } catch (err) {
        console.log(err);
      }
    },
  });

  server.route({
    method: "PUT",
    path: "/api/component/{Disease_ID}",
    handler: async (request, h) => {
      try {
        const db = request.server.plugins.sql.client;
        const {
          Disease_ID = request.params.Disease_ID,
          RBCIN,
          PLTIN,
          PLAIN,
          SLEUKIN,
          RPIN,
          SPLAIN,
          FPLTIN,
          RBCINV,
          PLTINV,
          PLAINV,
          SLEUKINV,
          RPINV,
          SPLAINV,
          FPLTINV,
          RBCOUT,
          PLTOUT,
          PLAOUT,
          SLEUKOUT,
          RPOUT,
          SPLAOUT,
          FPLTOUT,
          Do_Init,
          Do_Look,
        } = request.payload;
        const res = await db.component.updateComp({
          Disease_ID,
          RBCIN,
          PLTIN,
          PLAIN,
          SLEUKIN,
          RPIN,
          SPLAIN,
          FPLTIN,
          RBCINV,
          PLTINV,
          PLAINV,
          SLEUKINV,
          RPINV,
          SPLAINV,
          FPLTINV,
          RBCOUT,
          PLTOUT,
          PLAOUT,
          SLEUKOUT,
          RPOUT,
          SPLAOUT,
          FPLTOUT,
          Do_Init,
          Do_Look,
        });
        return res.recordset[0];
      } catch (err) {
        console.log(err);
      }
    },
  });
};
