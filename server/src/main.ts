import http from "http";

import app from "./app";

const httpServer = http.createServer(app);

httpServer.listen(app.get("port"), () => {
  console.log(`Server is running on ${httpServer.address()}`);
});

export default httpServer;
