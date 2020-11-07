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

  const getOneDonor = async ({ Donor_ID }) => {
    const cnx = await getConnection();
    const request = await cnx.request();
    request.input("Donor_ID", sql.Int, Donor_ID);
    return request.query(sqlQueries.getOneDonor);
  };

  const addDonor = async ({
    Donor_ID,
    Blood_Type,
    Donor_FName,
    Donor_LName,
    Birth_Date,
    Donor_St_Addr,
    Donor_City,
    Donor_State,
    Donor_Country,
    Donor_Postal,
  }) => {
    const cnx = await getConnection();
    const request = await cnx.request();
    request.input("Donor_ID", sql.Int, Donor_ID);
    request.input("Blood_Type", sql.VarChar(4), Blood_Type);
    request.input("Donor_FName", sql.VarChar(50), Donor_FName);
    request.input("Donor_LName", sql.VarChar(50), Donor_LName);
    request.input("Birth_Date", sql.Date, Birth_Date);
    request.input("Donor_St_Addr", sql.VarChar(50), Donor_St_Addr);
    request.input("Donor_City", sql.VarChar(50), Donor_City);
    request.input("Donor_State", sql.VarChar(4), Donor_State);
    request.input("Donor_Country", sql.VarChar(60), Donor_Country);
    request.input("Donor_Postal", sql.VarChar(12), Donor_Postal);
    return await request.query(sqlQueries.addDonor);
  };

  const updateDonor = async ({
    Donor_ID,
    Blood_Type,
    Donor_FName,
    Donor_LName,
    Birth_Date,
    Donor_St_Addr,
    Donor_City,
    Donor_State,
    Donor_Country,
    Donor_Postal,
  }) => {
    const cnx = await getConnection();
    const request = await cnx.request();
    request.input("Donor_ID", sql.Int, Donor_ID);
    request.input("Blood_Type", sql.VarChar(4), Blood_Type);
    request.input("Donor_FName", sql.VarChar(50), Donor_FName);
    request.input("Donor_LName", sql.VarChar(50), Donor_LName);
    request.input("Birth_Date", sql.Date, Birth_Date);
    request.input("Donor_St_Addr", sql.VarChar(50), Donor_St_Addr);
    request.input("Donor_City", sql.VarChar(50), Donor_City);
    request.input("Donor_State", sql.VarChar(4), Donor_State);
    request.input("Donor_Country", sql.VarChar(60), Donor_Country);
    request.input("Donor_Postal", sql.VarChar(12), Donor_Postal);
    return request.query(sqlQueries.updateDonor);
  };

  const deleteDonor = async ({ donor_id }) => {
    const cnx = await getConnection();
    const request = await cnx.request();
    request.input("donor_id", sql.Int, donor_id);
    return request.query(sqlQueries.deleteDonor);
  };

  return {
    addDonor,
    getDonor,
    getOneDonor,
    updateDonor,
    deleteDonor,
  };
};

module.exports = { register };
