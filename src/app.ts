import express from "express";
import * as mongoose from "mongoose";

import { User } from "./models/User.model";

const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

const PORT = 3000;

app.listen(PORT, () => {
  mongoose.connect("mongodb://127.0.0.1:27017/sept-2022");
  console.log("server work");
});

app.get("/users", async (req, res) => {
  const users = await User.find();

  res.json(users);
});

app.get("/users/:userId", async (req, res) => {
  const { userId } = req.params;
  const user = await User.findById(userId);

  res.json(user);
});
//
app.post("/users", async (req, res) => {
  const body = req.body;
  const user = await User.create({ ...body });

  res.json({
    message: "User created",
    data: user,
  });
});
//
app.put("/users/:userId", async (req, res) => {
  const user = req.body;
  const { userId } = req.params;

  const updatedUser = await User.updateOne({ _id: userId, user });

  res.json(updatedUser);
});
//
app.delete("/users/userId", async (req, res) => {
  const userId = req.params;

  await User.deleteOne({ _id: userId });
  res.json({
    message: "User deleted",
  });
});
