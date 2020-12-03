const express = require("express");
const bodyParser = require("body-parser");
const app = express();
const cors = require("cors");
const db = require('./config/database')

// const server_port = 3000;
const server_port = process.env.PORT;

console.log("Environment State : ", process.env.NODE_ENV);

class Server {
  constructor() {
    this.init();
  }

  init() {
      this.initHTTPServer();
      this.initControllers();
      this.initRoutes();
  }


  async initControllers() {
    this.UserController = require("./controllers/user.js")();
  }

  initRoutes() {
    console.log("Init Routes");

    //verifying token
    app.use("/", async (req, res, next) => {
        try {
          console.log("got")
          next();
        }
        catch (err) {
          res.json({ code: 403, msg: "Failed" })
        }
    });
    
    //sample route
    const userRoute = require("./routes/user.js")(this.UserController);
    app.use("/api/user", userRoute.getRouter());
  }

  initHTTPServer() {
    app.use(bodyParser.json());
    app.use(
      bodyParser.urlencoded({
        extended: true
      })
    );
    app.use(cors());
    db.sequelize.sync().then(function() {
      console.log("synced")
    })
    app.listen(server_port, () => {
      console.log("http://localhost:3000/   Server running on port " + server_port);
    });
  }
}

const server = new Server();
