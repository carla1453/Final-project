import express from "express";

import {
  createpaintings,
  getpaintings,
  getpaintingsbyid,
  getUserpaintings,
  updatepaintingsbyid,
  deletepaintingsbyid,
  deleteAllpaintings,
} from "../controllers/paintings.js";

import isauthonticated from "../middelwares/authentification.js";
const paintingsRouter = express.Router();

paintingsRouter.post("/", isauthonticated, createpaintings);

paintingsRouter.get("/", getpaintings);

paintingsRouter.get("/:id", getpaintingsbyid);

paintingsRouter.get("/mine", isauthonticated, getUserpaintings);

paintingsRouter.put("/:id", isauthonticated, updatepaintingsbyid);

paintingsRouter.delete("/:id", isauthonticated, deletepaintingsbyid);

paintingsRouter.delete("/:id", isauthonticated, deleteAllpaintings);

export default paintingsRouter;
