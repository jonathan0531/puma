"use strict";

const utils = require("../utils");

const register = async ({ sql, getConnection }) => {
  // read in all the .sql files for this folder
  const sqlQueries = await utils.loadSqlQueries("tracking");

  const getTracking = async (Track_ID) => {
    // get a connection to SQL Server
    const cnx = await getConnection();
    // create a new request
    const request = await cnx.request();
    // configure sql query parameters
    request.input("Track_ID", sql.Int, Track_ID);
    // return the executed query
    return request.query(sqlQueries.getTracking);
  };

  return {
    getTracking,
  };
};

module.exports = { register };
