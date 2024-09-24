import express from "express";
import mongoose from "mongoose";
import paintingsRouter from "./routes/paintings.js";
import UserRouter from "./routes/user.js";
import cors from "cors";

const server = express();

server.use("/user", UserRouter);
server.use("/paintings", paintingsRouter);

mongoose
  .connect(
    "mongodb+srv://Rihab:rihab2024@cluster0.wbxqmgq.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0"
  )
  .then(function () {
    console.log("successfully connected");
  });

server.listen(8000, () => {
  console.log("surver is running on post 8000");
});
