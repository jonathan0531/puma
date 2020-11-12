"use strict";

const utils = require("../utils");

const register = async ({ sql, getConnection }) => {
  const sqlQueries = await utils.loadSqlQueries("test");

  const getTest = async (Test_ID) => {
    const cnx = await getConnection();
    const request = await cnx.request();
    request.input("Test_ID", sql.VarChar(6), Test_ID);
    return request.query(sqlQueries.getTest);
  };

  const getOneTest = async ({ Test_ID }) => {
    const cnx = await getConnection();
    const request = await cnx.request();
    request.input("Test_ID", sql.VarChar(6), Test_ID);
    return request.query(sqlQueries.getOneTest);
  };

  const addTest = async ({
    Test_ID,
    Result_Set,
    Test_Count,
    Disease_ID,
    Supplemental,
  }) => {
    const cnx = await getConnection();
    const request = await cnx.request();
    request.input("Test_ID", sql.VarChar(6), Test_ID);
    request.input("Result_Set", sql.Int, Result_Set);
    request.input("Test_Count", sql.Int, Test_Count);
    request.input("Disease_ID", sql.VarChar(4), Disease_ID);
    request.input("Supplemental", sql.Int, Supplemental);
    return await request.query(sqlQueries.addTest);
  };

  const updateTest = async ({
    Test_ID,
    Result_Set,
    Test_Count,
    Disease_ID,
    Supplemental,
  }) => {
    const cnx = await getConnection();
    const request = await cnx.request();
    request.input("Test_ID", sql.VarChar(6), Test_ID);
    request.input("Result_Set", sql.Int, Result_Set);
    request.input("Test_Count", sql.Int, Test_Count);
    request.input("Disease_ID", sql.VarChar(4), Disease_ID);
    request.input("Supplemental", sql.Int, Supplemental);
    return request.query(sqlQueries.updateTest);
  };

  return {
    updateTest,
    addTest,
    getOneTest,
    getTest,
  };
};

module.exports = { register };
