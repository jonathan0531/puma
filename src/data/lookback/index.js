"use strict";

const utils = require("../utils");

const register = async ({ sql, getConnection }) => {
  const sqlQueries = await utils.loadSqlQueries("lookback");

  const getLookback = async (Lookback_ID) => {
    const cnx = await getConnection();
    const request = await cnx.request();
    request.input("Lookback_ID", sql.Int, Lookback_ID);
    return request.query(sqlQueries.getLookback);
  };

  const getOneLookback = async ({ Lookback_ID }) => {
    const cnx = await getConnection();
    const request = await cnx.request();
    request.input("Lookback_ID", sql.Int, Lookback_ID);
    return request.query(sqlQueries.getOneLookback);
  };

  const getSingleLookback = async ({ Lookback_ID }) => {
    const cnx = await getConnection();
    const request = await cnx.request();
    request.input("Lookback_ID", sql.Int, Lookback_ID);
    return request.query(sqlQueries.getSingleLookback);
  };

  const getNatLookback = async ({ Lookback_ID }) => {
    const cnx = await getConnection();
    const request = await cnx.request();
    request.input("Lookback_ID", sql.Int, Lookback_ID);
    return request.query(sqlQueries.getNatLookback);
  };

  const getInitLookback = async ({ Lookback_ID }) => {
    const cnx = await getConnection();
    const request = await cnx.request();
    request.input("Lookback_ID", sql.Int, Lookback_ID);
    return request.query(sqlQueries.getInitLookback);
  };

  const updateLookback = async ({ Lookback_ID, Complete }) => {
    const cnx = await getConnection();
    const request = await cnx.request();
    request.input("Lookback_ID", sql.Int, Lookback_ID);
    request.input("Complete", sql.Int, Complete);
    return request.query(sqlQueries.updateLookback);
  };

  return {
    getLookback,
    getOneLookback,
    getSingleLookback,
    getNatLookback,
    getInitLookback,
    updateLookback,
  };
};

module.exports = { register };
