"use strict";

const utils = require("../utils");

const register = async ({ sql, getConnection }) => {
  const sqlQueries = await utils.loadSqlQueries("pending");

  const getPending = async (Lookback_ID) => {
    const cnx = await getConnection();
    const request = await cnx.request();
    request.input("Lookback_ID", sql.Int, Lookback_ID);
    return request.query(sqlQueries.getPending);
  };

  const getOnePending = async ({ Lookback_ID }) => {
    const cnx = await getConnection();
    const request = await cnx.request();
    request.input("Lookback_ID", sql.Int, Lookback_ID);
    return request.query(sqlQueries.getOnePending);
  };

  return {
    getPending,
    getOnePending,
  };
};

module.exports = { register };
