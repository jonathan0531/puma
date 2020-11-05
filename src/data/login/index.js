"use strict";

const utils = require("../utils");

const register = async ({ sql, getConnection }) => {
  const sqlQueries = await utils.loadSqlQueries("login");

  const getLogin = async (email) => {
    const cnx = await getConnection();
    const request = await cnx.request();
    request.input("email", sql.VarChar(50), email);
    return request.query(sqlQueries.getLogin);
  };

  const addLogin = async ({ email, password }) => {
    const cnx = await getConnection();
    const request = await cnx.request();
    request.input("email", sql.VarChar(50), email);
    request.input("password", sql.VarChar(50), password);
    return await request.query(sqlQueries.addLogin);
  };

  return {
    getLogin,
    addLogin,
  };
};

module.exports = { register };
