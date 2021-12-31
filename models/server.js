const express = require("express");
const cors = require("cors");
require("dotenv").config();

class Server {
  constructor() {
    this.app = express();
    this.port = process.env.PORT;

    // Middlewares
    this.middlewares();
    // RUtas
    this.routes();
  }

  middlewares() {
    this.app.use(cors());
    this.app.use(express.static("public"));
  }

  routes() {
    this.app.get("/api", (req, res) => {
      res.status(501).json({
        msg: "Get Endpoint",
      });
    });

    this.app.put("/api", (req, res) => {
      res.status(501).json({
        msg: "Put Endpoint",
      });
    });

    this.app.post("/api", (req, res) => {
      res.status(501).json({
        msg: "Post Endpoint",
      });
    });

    this.app.delete("/api", (req, res) => {
      res.status(501).json({
        msg: "Delete Endpoint",
      });
    });

    this.app.link("/api", (req, res) => {
      res.status(501).json({
        msg: "LINK Endpoint",
      });
    });
  }

  listen() {
    this.app.listen(this.port, () => {
      console.log("Server running in port ", this.port);
    });
  }
}

module.exports = Server;
