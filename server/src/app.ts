import redis from "redis";
import express from "express";
import cors from "cors";
import helmet from "helmet";
import flash from "express-flash";
import bodyParser from "body-parser";
import compression from "compression";
import session from "express-session";
import redis_store from "connect-redis";
import cookieParser from "cookie-parser";

const app = express();
const redisClient = redis.createClient();
const RedisStore = redis_store(session);

app.set("port", process.env.PORT || 9999);

app.use(cors());
app.use(helmet());
app.use(flash());
app.use(compression());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(cookieParser());
app.use(
  session({
    resave: true,
    saveUninitialized: true,
    secret: process.env.SESSION_SECRET as string,
    store: new RedisStore({
      client: redisClient,
    }),
  })
);

app.get("/prob", (_req, res) => {
  res.send("Exist");
});

export default app;
