import "reflect-metadata";
import { config } from "dotenv";
config();

import http from "http";

import app from "./app";
import { createConnection } from "typeorm";
import { User } from "./entities/User";

const httpServer = http.createServer(app);

const main = async () => {
  await createConnection({
    type: "postgres",
    host: "localhost",
    port: 54320,
    username: "postgres",
    password: "postgres",
    database: "noul",
    synchronize: true,
    entities: [User],
  });
  httpServer.listen(app.get("port"), () => {
    console.log(`Server is running on port 9999`);
  });
};

export default httpServer;

main();
