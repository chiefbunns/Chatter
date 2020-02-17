const express = require("express")();

// FIND a user by credentials
const findUser = (req, res, next) => {
  req.app
    .get("db")
    .findUserByCredentials([req.body.email, req.body.password])
    .then(result => {
      if (!result[0]) {
        return res.status(404).send("Not Found");
      }
      res.status(201).json(result[0]);
    });
};
// CREATE a user
const createUser = (req, res, next) => {
  req.app
    .get("db")
    .createUser([
      req.body.user_handle,
      req.body.email,
      req.body.password
    ])
    .then(result => {
      res.status(201).json(result[0]);
    });
};

module.exports = {
  findUser,
  createUser
};
