const {
    response
} = require("express");

const getUsers = (req, res = response) => {

    const query = req.query;
    res.status(501).json({
        msg: "GET Endpoint",
        query
    });
};

const postUsers = (req, res = response) => {
    const {
        nombre,
        edad
    } = req.body;

    res.status(501).json({
        msg: "POST Endpoint",
        nombre,
        edad,
    });
};

const patchUsers = (req, res = response) => {
    res.status(501).json({
        msg: "PATCH Endpoint",
    });
};

const putUsers = (req, res = response) => {
    const {
        id
    } = req.params;
    res.status(501).json({
        msg: "PUT Endpoint",
        id
    });
};

const deleteUsers = (req, res = response) => {
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