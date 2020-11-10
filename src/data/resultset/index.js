"use strict";

const utils = require("../utils");

const register = async ({ sql, getConnection }) => {
  const sqlQueries = await utils.loadSqlQueries("resultset");

  const getRS = async (Result_Set) => {
    const cnx = await getConnection();
    const request = await cnx.request();
    request.input("Result_Set", sql.Int, Result_Set);
    return request.query(sqlQueries.getRS);
  };

  //   const getOneDonor = async ({ Donor_ID }) => {
  //     const cnx = await getConnection();
  //     const request = await cnx.request();
  //     request.input("Donor_ID", sql.Int, Donor_ID);
  //     return request.query(sqlQueries.getOneDonor);
  //   };

  const addRS = async ({
    Result_Set,
    Result,
    Result_Value,
    Value_Desc,
    Nat_Result,
    Nat_Count,
    Conf_Result,
    Conf_Count,
    Repeat_Result,
    Repeat_Count,
  }) => {
    const cnx = await getConnection();
    const request = await cnx.request();
    request.input("Result_Set", sql.Int, Result_Set);
    request.input("Result", sql.VarChar(4), Result);
    request.input("Result_Value", sql.Decimal(7, 3), Result_Value);
    request.input("Value_Desc", sql.VarChar(30), Value_Desc);
    request.input("Nat_Result", sql.Decimal(7, 3), Nat_Result);
    request.input("Nat_Count", sql.Decimal(7, 3), Nat_Count);
    request.input("Conf_Result", sql.Decimal(7, 3), Conf_Result);
    request.input("Conf_Count", sql.Decimal(7, 3), Conf_Count);
    request.input("Repeat_Result", sql.Decimal(7, 3), Repeat_Result);
    request.input("Repeat_Count", sql.Decimal(7, 3), Repeat_Count);
    return await request.query(sqlQueries.addRS);
  };

  //   const updateDonor = async ({
  //     Donor_ID,
  //     Blood_Type,
  //     Donor_FName,
  //     Donor_LName,
  //     Birth_Date,
  //     Donor_St_Addr,
  //     Donor_City,
  //     Donor_State,
  //     Donor_Country,
  //     Donor_Postal,
  //   }) => {
  //     const cnx = await getConnection();
  //     const request = await cnx.request();
  //     request.input("Donor_ID", sql.Int, Donor_ID);
  //     request.input("Blood_Type", sql.VarChar(4), Blood_Type);
  //     request.input("Donor_FName", sql.VarChar(50), Donor_FName);
  //     request.input("Donor_LName", sql.VarChar(50), Donor_LName);
  //     request.input("Birth_Date", sql.Date, Birth_Date);
  //     request.input("Donor_St_Addr", sql.VarChar(50), Donor_St_Addr);
  //     request.input("Donor_City", sql.VarChar(50), Donor_City);
  //     request.input("Donor_State", sql.VarChar(4), Donor_State);
  //     request.input("Donor_Country", sql.VarChar(60), Donor_Country);
  //     request.input("Donor_Postal", sql.VarChar(12), Donor_Postal);
  //     return request.query(sqlQueries.updateDonor);
  //   };

  //   const deleteDonor = async ({ donor_id }) => {
  //     const cnx = await getConnection();
  //     const request = await cnx.request();
  //     request.input("donor_id", sql.Int, donor_id);
  //     return request.query(sqlQueries.deleteDonor);
  //   };

  return {
    addRS,
    getRS,
    // getOneDonor,
    // updateDonor,
    // deleteDonor,
  };
};

module.exports = { register };
