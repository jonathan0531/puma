"use strict";

const utils = require("../utils");

const register = async ({ sql, getConnection }) => {
  // read in all the .sql files for this folder
  const sqlQueries = await utils.loadSqlQueries("donor");

  const getDonor = async (Donor_ID) => {
    // get a connection to SQL Server
    const cnx = await getConnection();

    // create a new request
    const request = await cnx.request();

    // configure sql query parameters
    request.input("Donor_ID", sql.VarChar(50), Donor_ID);

    // return the executed query
    return request.query(sqlQueries.getDonor);
  };

  return {
    getDonor,
  };
};

module.exports = { register };
