import * as express from "express";

import Controller from "../shared/interfaces/controller.interface";
import { UnauthorizedActionException } from "../shared/exceptions/request.exception";

import submissionModel from "./submission.model";
import { CurrentUser } from "../shared/interfaces/firebase.interface";

export default class Submission implements Controller {
  public router = express.Router();
  public submission = submissionModel;

  constructor() {
    this.initializeRoutes();
  }

  private initializeRoutes() {
    this.router.get("/", this.getSubmission);
    this.router.post("/", this.createSubmission);
  }

  private createSubmission = async (
    { body, ...request }: any,
    response: express.Response,
    next: express.NextFunction
  ) => {
    const currentUser: CurrentUser = request["currentUser"];
    if (!currentUser) {
      next(new UnauthorizedActionException());
    }
    const { uid: userId } = currentUser;
    const current = await this.submission.findOne({ userId });

    if (current) {
      await this.submission.findOneAndUpdate(
        {
          userId,
        },
        {
          ...body,
          userId,
        }
      );
      const data = await this.submission.findOne({ userId });
      response.send({
        success: true,
        data,
      });
    } else {
      const data = await this.submission.create({
        ...body,
        userId,
      });
      response.send({
        success: true,
        data,
      });
    }
  };

  private getSubmission = async (
    request: any,
    response: express.Response,
    next: express.NextFunction
  ) => {
    const currentUser: CurrentUser = request["currentUser"];
    if (!currentUser) {
      next(new UnauthorizedActionException());
    }
    const { uid: userId } = currentUser;
    const data = await this.submission.findOne({ userId });
    response.send({
      success: true,
      data,
    });
  };
}
