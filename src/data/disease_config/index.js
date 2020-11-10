"use strict";

const utils = require("../utils");

const register = async ({ sql, getConnection }) => {
  // read in all the .sql files for this folder
  const sqlQueries = await utils.loadSqlQueries("disease_config");

  const getDisease = async (disease_id) => {
    // get a connection to SQL Server
    const cnx = await getConnection();

    // create a new request
    const request = await cnx.request();

    // configure sql query parameters
    request.input("disease_id", sql.Int, disease_id);

    // return the executed query
    return request.query(sqlQueries.getDisease);
  };

  const getOneDisease = async ({ Disease_ID }) => {
    const cnx = await getConnection();
    const request = await cnx.request();
    request.input("Disease_ID", sql.Int, Disease_ID);
    return request.query(sqlQueries.getOneDisease);
  };

  const addDisease = async ({
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
  }) => {
    const cnx = await getConnection();
    const request = await cnx.request();
    request.input("Disease_ID", sql.Int, Disease_ID);
    request.input("Disease_Desc", sql.VarChar(4), Disease_Desc);
    request.input("Lookback_Min", sql.VarChar(50), Lookback_Min);
    request.input("Lookback_Max", sql.VarChar(50), Lookback_Max);
    request.input("Confirm_Needed", sql.Date, Confirm_Needed);
    request.input("Recip_Tracing", sql.VarChar(50), Recip_Tracing);
    request.input("Follow_Up_Days", sql.VarChar(50), Follow_Up_Days);
    request.input("Exception_Comments", sql.VarChar(4), Exception_Comments);
    request.input("RT_LETTER", sql.VarChar(60), RT_LETTER);
    request.input("RT_ON_IND_RESULT", sql.VarChar(12), RT_ON_IND_RESULT);
    return await request.query(sqlQueries.addDisease);
  };

  const updateDisease = async ({
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
  }) => {
    const cnx = await getConnection();
    const request = await cnx.request();
    request.input("Disease_ID", sql.Int, Disease_ID);
    request.input("Disease_Desc", sql.VarChar(4), Disease_Desc);
    request.input("Lookback_Min", sql.VarChar(50), Lookback_Min);
    request.input("Lookback_Max", sql.VarChar(50), Lookback_Max);
    request.input("Confirm_Needed", sql.Date, Confirm_Needed);
    request.input("Recip_Tracing", sql.VarChar(50), Recip_Tracing);
    request.input("Follow_Up_Days", sql.VarChar(50), Follow_Up_Days);
    request.input("Exception_Comments", sql.VarChar(4), Exception_Comments);
    request.input("RT_LETTER", sql.VarChar(60), RT_LETTER);
    request.input("RT_ON_IND_RESULT", sql.VarChar(12), RT_ON_IND_RESULT);
    return request.query(sqlQueries.updateDisease);
  };

  const deleteDisease = async ({ disease_id }) => {
    const cnx = await getConnection();
    const request = await cnx.request();
    request.input("disease_id", sql.Int, disease_id);
    return request.query(sqlQueries.deleteDisease);
  };

  return {
    addDisease,
    getDisease,
    getOneDisease,
    updateDisease,
    deleteDisease,
  };
};

module.exports = { register };
