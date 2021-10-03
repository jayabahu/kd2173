import * as bodyParser from "body-parser";
import * as cookieParser from "cookie-parser";
import * as express from "express";
import * as mongoose from "mongoose";
import * as cors from "cors";
import * as admin from "firebase-admin";

import Controller from "./shared/interfaces/controller.interface";
import errorMiddleware from "./shared/middleware/error.middleware";

export default class Init {
  public app: express.Application;

  constructor(controllers: Controller) {
    this.app = express();

    this.connectToTheDatabase();
    this.initializeMiddleware();
    this.initializeControllers(controllers);
    this.initializeErrorHandling();
  }

  private initializeMiddleware() {
    this.app.use(bodyParser.json());
    this.app.use(cookieParser());
    this.app.use(cors());
    this.app.use(Init.decodeIDToken);

  }

  private static async decodeIDToken(req: express.Request, res: express.Response, next: express.NextFunction) {
    if (req.headers?.authorization?.startsWith('Bearer ')) {
      const idToken = req.headers.authorization.split('Bearer ')[1];
      try {
        // @ts-ignore
        req['currentUser'] = await admin.auth().verifyIdToken(idToken);
      } catch {}
    }

    next();
  }

  private initializeErrorHandling() {
    this.app.use(errorMiddleware);
  }

  private initializeControllers(controller: Controller) {
    this.app.use("/", controller.router);
  }

  private connectToTheDatabase() {
    mongoose
      .connect(
        "mongodb+srv://rok2173DbUser:4Q34IVt9Sl1RSB5n@rok2173.ptrs3.mongodb.net/myFirstDatabase?retryWrites=true&w=majority",
        { useNewUrlParser: true }
      )
      .then(() => "MDB connected")
      .catch((error) => error);
    // mongoose.set("debug", true);
  }
}
