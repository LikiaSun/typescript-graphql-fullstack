import "reflect-metadata";
import { config } from "dotenv";
config();

import http from "http";

import app from "./app";
import { createConnection } from "typeorm";

const httpServer = http.createServer(app);

const main = async () => {
  await createConnection();
  httpServer.listen(app.get("port"), () => {
    console.log(`Server is running on port 9999`);
  });
};

export default httpServer;

main();
