"use strict";

const utils = require("../utils");

const register = async ({ sql, getConnection }) => {
  const sqlQueries = await utils.loadSqlQueries("completed");

  const getCompleted = async (Lookback_ID) => {
    const cnx = await getConnection();
    const request = await cnx.request();
    request.input("Lookback_ID", sql.Int, Lookback_ID);
    return request.query(sqlQueries.getCompleted);
  };

  const getOneCompleted = async ({ Lookback_ID }) => {
    const cnx = await getConnection();
    const request = await cnx.request();
    request.input("Lookback_ID", sql.Int, Lookback_ID);
    return request.query(sqlQueries.getOneCompleted);
  };

  return {
    getCompleted,
    getOneCompleted,
  };
};

module.exports = { register };
