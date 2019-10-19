import { config } from "dotenv";
config();

import http from "http";

import app from "./app";
import { AddressInfo } from "net";

const httpServer = http.createServer(app);

httpServer.listen(app.get("port"), () => {
  const { port } = httpServer.address() as AddressInfo;
  console.log(`Server is running on port ${port}`);
});

export default httpServer;
