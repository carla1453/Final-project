import paintings from "../models/paintings.js";

export async function createpaintings(req, res) {
  const paintingsinfo = req.body;
  try {
    const paintings = await paintings.create({
      ...paintingsinfo,
      userid: req.userid,
    });
    res.send(paintings);
  } catch (error) {
    res.send({ error: error.message });
  }
}

export async function getpaintings(req, res) {
  const paintings = await paintings.find();
  res.send(paintings);
}

export async function getUserpaintings(req, res) {
  const paintings = await paintings.find({ userid: req.userid });
  res.send(paintings);
}

export async function getpaintingsbyid(req, res) {
  const paintings = await paintings.find({ userid: req.userid });
  res.send(paintings);
}

export async function updatepaintingsbyid(req, res) {
  const id = req.params.id;
  const updatepaintings = await paintings.findOneAndUpdate(
    {
      _id: id,
      userid: req.userid,
    },
    req.body
  );
  res.send({
    msg: "update with success",
  });
}

export async function deletepaintingsbyid(req, res) {
  const id = req.params.id;
  const delatepaitings = await paintings.findOneAndDelete(
    {
      _id: id,
      userid: req.userid,
    },
    req.body
  );
  res.send({
    msg: "deleted with success",
  });
}

export const deleteAllpaintings = async (req, res) => {
  await paintings.deletemany({ userid: req.userid });
  res.send({ msg: "deleted with success" });
};
