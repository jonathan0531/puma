"use strict";

const utils = require("../utils");

const register = async ({ sql, getConnection }) => {
  const sqlQueries = await utils.loadSqlQueries("component");

  const getComp = async (Disease_ID) => {
    const cnx = await getConnection();
    const request = await cnx.request();
    request.input("Disease_ID", sql.VarChar(4), Disease_ID);
    return request.query(sqlQueries.getComp);
  };

  const getOneComp = async ({ Disease_ID }) => {
    const cnx = await getConnection();
    const request = await cnx.request();
    request.input("Disease_ID", sql.VarChar(4), Disease_ID);
    return request.query(sqlQueries.getOneComp);
  };

  const addComp = async ({
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
  }) => {
    const cnx = await getConnection();
    const request = await cnx.request();
    request.input("Disease_ID", sql.VarChar(4), Disease_ID);
    request.input("RBCIN", sql.Int, RBCIN);
    request.input("PLTIN", sql.Int, PLTIN);
    request.input("PLAIN", sql.Int, PLAIN);
    request.input("SLEUKIN", sql.Int, SLEUKIN);
    request.input("RPIN", sql.Int, RPIN);
    request.input("SPLAIN", sql.Int, SPLAIN);
    request.input("FPLTIN", sql.Int, FPLTIN);
    request.input("RBCINV", sql.Int, RBCINV);
    request.input("PLTINV", sql.Int, PLTINV);
    request.input("PLAINV", sql.Int, PLAINV);
    request.input("SLEUKINV", sql.Int, SLEUKINV);
    request.input("RPINV", sql.Int, RPINV);
    request.input("SPLAINV", sql.Int, SPLAINV);
    request.input("FPLTINV", sql.Int, FPLTINV);
    request.input("RBCOUT", sql.Int, RBCOUT);
    request.input("PLTOUT", sql.Int, PLTOUT);
    request.input("PLAOUT", sql.Int, PLAOUT);
    request.input("SLEUKOUT", sql.Int, SLEUKOUT);
    request.input("RPOUT", sql.Int, RPOUT);
    request.input("SPLAOUT", sql.Int, SPLAOUT);
    request.input("FPLTOUT", sql.Int, FPLTOUT);
    request.input("Do_Init", sql.Int, Do_Init);
    request.input("Do_Look", sql.Int, Do_Look);
    return await request.query(sqlQueries.addComp);
  };

  const updateComp = async ({
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
  }) => {
    const cnx = await getConnection();
    const request = await cnx.request();
    request.input("Disease_ID", sql.VarChar(4), Disease_ID);
    request.input("RBCIN", sql.Int, RBCIN);
    request.input("PLTIN", sql.Int, PLTIN);
    request.input("PLAIN", sql.Int, PLAIN);
    request.input("SLEUKIN", sql.Int, SLEUKIN);
    request.input("RPIN", sql.Int, RPIN);
    request.input("SPLAIN", sql.Int, SPLAIN);
    request.input("FPLTIN", sql.Int, FPLTIN);
    request.input("RBCINV", sql.Int, RBCINV);
    request.input("PLTINV", sql.Int, PLTINV);
    request.input("PLAINV", sql.Int, PLAINV);
    request.input("SLEUKINV", sql.Int, SLEUKINV);
    request.input("RPINV", sql.Int, RPINV);
    request.input("SPLAINV", sql.Int, SPLAINV);
    request.input("FPLTINV", sql.Int, FPLTINV);
    request.input("RBCOUT", sql.Int, RBCOUT);
    request.input("PLTOUT", sql.Int, PLTOUT);
    request.input("PLAOUT", sql.Int, PLAOUT);
    request.input("SLEUKOUT", sql.Int, SLEUKOUT);
    request.input("RPOUT", sql.Int, RPOUT);
    request.input("SPLAOUT", sql.Int, SPLAOUT);
    request.input("FPLTOUT", sql.Int, FPLTOUT);
    request.input("Do_Init", sql.Int, Do_Init);
    request.input("Do_Look", sql.Int, Do_Look);
    return request.query(sqlQueries.updateComp);
  };

  //   const deleteDonor = async ({ donor_id }) => {
  //     const cnx = await getConnection();
  //     const request = await cnx.request();
  //     request.input("donor_id", sql.Int, donor_id);
  //     return request.query(sqlQueries.deleteDonor);
  //   };

  return {
    getComp,
    addComp,
    updateComp,
    getOneComp,
  };
};

module.exports = { register };
