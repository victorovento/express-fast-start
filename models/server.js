const express = require("express");
const cors = require("cors");
require("dotenv").config();

class Server {
  constructor() {
    this.app = express();
    this.port = process.env.PORT;

    this.usersRoutePath = '/api/users';
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
      this.app.use(this.usersRoutePath, require('../routes/user'));
  }

  listen() {
    this.app.listen(this.port, () => {
      console.log("Server running in port ", this.port);
    });
  }
  
}

module.exports = Server;
