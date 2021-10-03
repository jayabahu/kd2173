import "reflect-metadata";
import * as functions from "firebase-functions";
import * as admin from "firebase-admin";

admin.initializeApp();

import Init from "./init";

import SubmissionController from "./submission/submission.controller"

export const submission = functions.https.onRequest(new Init(new SubmissionController()).app);
