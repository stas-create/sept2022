import { model, Schema } from "mongoose";

import { EGender } from "../types/user.Types";

const userSchema = new Schema(
  {
    name: {
      type: String,
    },
    email: {
      type: String,
      unique: true,
      required: [true, "Email is required"],
      trim: true,
      lowercase: true,
    },
    password: {
      type: String,
      required: [true, "Password is required"],
    },
    gender: {
      type: String,
      enum: EGender,
    },
  },
  {
    versionKey: false,
  }
);

export const User = model("user", userSchema);
