import bodyparser from "body-parser";
import express from "express";

import userRouter from "./routes/usersRoutes.js";
import mongoose from "mongoose";
const app = express();
app.use(bodyparser.json());

const connectionString =
  "mongodb+srv://tester2:321@cluster0.jyjaj.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0";

app.use("/api/users", userRouter);

mongoose
  .connect(connectionString)
  .then(() => {
    console.log("connected to the database");
  })
  .catch(() => {
    console.log("connection failed");
  });

/*app.get("/", (req, res) => {
  console.log("helloworld");
  res.json({
    msg: "get response",
  });
});

app.post("/", (req, res) => {
  const name = req.body.name;
  const massage = "Hi  " + name;
  console.log("hellowpostorld");
  res.json({
    message: massage,
  });
});

app.get("/users/", (req, res) => {
  res.json({
    msg: "user list",
  });
});

app.post("/users/", (req, res) => {
  const name = req.body.name;
  const massage = "Hi  " + name;
  console.log("hellowpostorld");
  res.json({
    message: massage,
  });
});*/

app.listen(5000, (req, res) => {
  console.log("server is running on port 5000");
});
