import mongoose from "mongoose";

const paintingsSchema = new mongoose.Schema({
  name: { type: String, required: true },
  image: { type: String, required: true },
  creationdate: { type: String, required: true },
  description: { type: String, required: true },
  userid: { type: mongoose.Schema.Types.ObjectId, ref: "user", required: true },
});

const paintings = mongoose.model("paintings", paintingsSchema);
export default paintings;
