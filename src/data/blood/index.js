"use strict";

const utils = require("../utils");

const register = async ({ sql, getConnection }) => {
  // read in all the .sql files for this folder
  const sqlQueries = await utils.loadSqlQueries("blood");

  const getBlood = async (Blood_ID) => {
    // get a connection to SQL Server
    const cnx = await getConnection();

    // create a new request
    const request = await cnx.request();

    // configure sql query parameters
    request.input("Blood_ID", sql.VarChar(50), Blood_ID);

    // return the executed query
    return request.query(sqlQueries.getBlood);
  };

  return {
    getBlood,
  };
};

module.exports = { register };
