import * as mongoose from "mongoose";
import { Submission } from "./submission.interface";

const submissionSchema = new mongoose.Schema(
  {
    name: String,
    governorId: String,
    alliance: String,
    killPointScreenshot: String,
    userId: String,
    t4KillPointsAtStart: Number,
    t5KillPointsAtStart: Number,
    totalKillPointsAtStart: Number,
    deadCountAtStart: Number,
    t4KillPointsInEnd: Number,
    t5KillPointsInEnd: Number,
    totalKillPointsInEnd: Number,
    deadCountInEnd: Number,
    killPointScreenshotInEnd: String,
  },
  { timestamps: true }
);

const submissionModel = mongoose.model<Submission & mongoose.Document>(
  "Submission",
  submissionSchema
);

export default submissionModel;
