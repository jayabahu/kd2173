import { ObjectID } from "mongodb";

export interface Submission {
  _id: ObjectID;
  name: string;
  governorId: string;
  alliance: string;
  killPointScreenshot: string;
  userId: string;
  t4KillPointsAtStart: number;
  t5KillPointsAtStart: number;
  totalKillPointsAtStart: number;
  deadCountAtStart: number;
  t4KillPointsInEnd: number;
  t5KillPointsInEnd: number;
  totalKillPointsInEnd: number;
  deadCountInEnd: number;
}
