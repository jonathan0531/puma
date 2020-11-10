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

  const getOneRS = async ({ Result_Set }) => {
    const cnx = await getConnection();
    const request = await cnx.request();
    request.input("Result_Set", sql.Int, Result_Set);
    return request.query(sqlQueries.getOneRS);
  };

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

  const updateRS = async ({
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
    return request.query(sqlQueries.updateRS);
  };

  //   const deleteDonor = async ({ donor_id }) => {
  //     const cnx = await getConnection();
  //     const request = await cnx.request();
  //     request.input("donor_id", sql.Int, donor_id);
  //     return request.query(sqlQueries.deleteDonor);
  //   };

  return {
    addRS,
    getRS,
    getOneRS,
    updateRS,
    // deleteDonor,
  };
};

module.exports = { register };
