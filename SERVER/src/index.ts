import "reflect-metadata";
const path = require("path");
require("dotenv").config(
  process.env.NODE_ENV === "development" && {
    path: path.resolve(__dirname, "../.env.development"),
  }
);

import { createConnection, getRepository } from "typeorm";

import express from "express";
import session from "express-session";
import http from "http";
import bodyParser from "body-parser";
import cors from "cors";
import io from "socket.io";

import jwt from "jsonwebtoken";
import routes from "./routes";
import sockets from "./sockets";
import { Emails } from "./entity/Emails";

const app = express();
const server = http.createServer(app);
export const ws = io(server);

app.use(bodyParser.json());
app.use(session({ secret: process.env.SSACRET }));
app.use(
  cors({
    // origin: process.env.CLIENT,
    origin: "*",
    credentials: true,
  })
);

(async () => {
  await createConnection();
  const emailRepo = getRepository(Emails);
  const unifiedEmailExists = await emailRepo.findOne({
    where: { email: "9999" },
  });
  if (!unifiedEmailExists) {
    const unifiedEmail = new Emails();
    unifiedEmail.id = 9999;
    unifiedEmail.email = "9999";
    emailRepo.save(unifiedEmail);
  }

  ws.use((socket, next) => {
    try {
      jwt.verify(socket.handshake.query.token, process.env.SACRET);
      return next();
    } catch {
      return next(new Error("BAD_TOKEN"));
    }
  });

  ws.on("connection", sockets);

  app.use("/", routes);

  server.listen(process.env.PORT);
})();
