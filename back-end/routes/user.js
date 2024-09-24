import express from "express";
import {
  createuser,
  deleteuser,
  getuser,
  getuserbyid,
  updateUser,
  login,
  deleteAllUser,
} from "../controllers/user.js";
import isauthonticated from "../middelwares/authentification.js";
const userrouter = express.Router();

userrouter.post("/", createuser);

userrouter.get("/", getuser);

userrouter.get(":id", getuserbyid);

userrouter.put("/:id", isauthonticated, updateUser);

userrouter.delete("/:id", isauthonticated, deleteuser);

userrouter.post("/login", login);

userrouter.get("/", isauthonticated, deleteAllUser);

export default userrouter;
