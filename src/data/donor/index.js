"use strict";

const utils = require("../utils");

const register = async ({ sql, getConnection }) => {
  // read in all the .sql files for this folder
  const sqlQueries = await utils.loadSqlQueries("donor");

  const getDonor = async (donor_id) => {
    // get a connection to SQL Server
    const cnx = await getConnection();

    // create a new request
    const request = await cnx.request();

    // configure sql query parameters
    request.input("donor_id", sql.Int, donor_id);

    // return the executed query
    return request.query(sqlQueries.getDonor);
  };

  const deleteDonor = async ({ donor_id }) => {
    const cnx = await getConnection();
    const request = await cnx.request();
    request.input("donor_id", sql.Int, donor_id);
    return request.query(sqlQueries.deleteDonor);
  };

  return {
    getDonor,
    deleteDonor,
  };
};

module.exports = { register };
