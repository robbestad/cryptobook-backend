import dotenv from 'dotenv';
import express, { Request, Response, NextFunction } from 'express';
import MainRouter from './routers/MainRouter';
import ErrorHandler from './models/ErrorHandler';
import * as path from "path";

// load the environment variables from the .env file
dotenv.config({
  path: '.env'
});

/**
 * Express server application class.
 * @description Will later contain the routing system.
 */
class Server {
  public app = express();
  public router = MainRouter;
}

// initialize server app
const server = new Server();

// make server app handle any route starting with '/api'
server.app.use('/api', server.router);

const buildPath = path.resolve(__dirname, "../public");
server.app.use("/", express.static(buildPath, { index: false }));
server.app.use("*", (req, res) => {
  res.sendFile("index.html", { root: buildPath });
});

// make server app handle any error
server.app.use((err: ErrorHandler, req: Request, res: Response, next: NextFunction) => {
  res.status(err.statusCode || 500).json({
    status: 'error',
    statusCode: err.statusCode,
    message: err.message
  });
});

// make server listen on some port
((APP_PORT=process.env.PORT || 5000) => {
  server.app.listen(Number(APP_PORT), "0.0.0.0", () => console.log(`> Listening on port ${APP_PORT}`));
})();
