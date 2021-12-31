const { response } = require("express");

const getUsers = (req, res) => {
  res.status(501).json({
    msg: "GET Endpoint",
  });
};

const postUsers = (req, res) => {
  res.status(501).json({
    msg: "POST Endpoint",
  });
};

const patchUsers = (req, res) => {
  res.status(501).json({
    msg: "PATCH Endpoint",
  });
};

const putUsers = (req, res) => {
  res.status(501).json({
    msg: "PUT Endpoint",
  });
};

const deleteUsers = (req, res) => {
  res.status(501).json({
    msg: "DELETE Endpoint",
  });
};

module.exports = {
  getUsers,
  patchUsers,
  putUsers,
  deleteUsers,
  postUsers,
};
