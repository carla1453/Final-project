import User from "../models/user.js";
import bcrypt from "bcryptjs";
import jwt from "jsonwebtoken";
import user from "../models/user.js";

export async function createuser(req, res) {
  const userinfo = req.body;
  const password = userinfo.password;
  const hashedpassword = bcrypt.hashSync(password, 10);
  try {
    const user = await User.create({ ...userinfo, password, hashedpassword });
    res.send(user);
  } catch (error) {
    res.send({ error: error.message });
  }
}

export async function getuser(req, res) {
  const user = await User.find();
  res.send(user);
}

export async function getuserbyid(req, res) {
  const paintings = await paintings.find({ userid: req.userid });
  res.send(user);
}

export async function updateUser(req, res) {
  const id = req.params.id;
  const updataUser = await User.findByIdAndUpdate(id, req.body);
  res.send({
    msg: "update with success",
  });
}

export async function deleteuser(req, res) {
  const id = req.params.id;
  const deleteUser = await User.findByIdAndDelete(id);
  res.send({
    msg: "deleted with success",
  });
}

export async function deleteAllUser(req, res) {
  await User.deleteMany();

  res.send({
    msg: "deleted all users with success",
  });
}

export async function login(req, res) {
  const { email, passwod } = req.body;
  const user = await User.findOne({ email: email });
  if (!user) {
    return res.send({ error: "user not found" });
  }
  const ispasswordvalid = bcrypt.comparesync(passwod, user.password);
  if (!ispasswordvalid) {
    return res.send({ error: "invalid password" });
  }
  const token = jwt.sign({ userid: user._id }, "secret");
  res.send(user);
}
