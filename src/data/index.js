"use strict";

const donor = require("./donor");
const login = require("./login");
const resultset = require("./resultset");
const component = require("./component");
const test = require("./test");
const tracking = require("./tracking");
const disease_config = require("./disease_config");
const pending = require("./pending");
const completed = require("./completed");
const lookback = require("./lookback");
const sql = require("mssql");

const client = async (server, config) => {
  let pool = null;

  const closePool = async () => {
    try {
      // try to close the connection pool
      await pool.close();

      // set the pool to null to ensure
      // a new one will be created by getConnection()
      pool = null;
    } catch (err) {
      // error closing the connection (could already be closed)
      // set the pool to null to ensure
      // a new one will be created by getConnection()
      pool = null;
      server.log(["error", "data"], "closePool error");
      server.log(["error", "data"], err);
    }
  };

  const getConnection = async () => {
    try {
      if (pool) {
        // has the connection pool already been created?
        // if so, return the existing pool
        return pool;
      }
      // create a new connection pool
      pool = await sql.connect(config);

      // catch any connection errors and close the pool
      pool.on("error", async (err) => {
        server.log(["error", "data"], "connection pool error");
        server.log(["error", "data"], err);
        await closePool();
      });
      return pool;
    } catch (err) {
      // error connecting to SQL Server
      server.log(["error", "data"], "error connecting to sql server");
      server.log(["error", "data"], err);
      pool = null;
    }
  };

  // this is the API the client exposes to the rest
  // of the application
  return {
    donor: await donor.register({ sql, getConnection }),
    login: await login.register({ sql, getConnection }),
    resultset: await resultset.register({ sql, getConnection }),
    component: await component.register({ sql, getConnection }),
    test: await test.register({ sql, getConnection }),
    tracking: await tracking.register({ sql, getConnection }),
    pending: await pending.register({ sql, getConnection }),
    completed: await completed.register({ sql, getConnection }),
    lookback: await lookback.register({ sql, getConnection }),
    disease_config: await disease_config.register({ sql, getConnection }),
  };
};

module.exports = client;
