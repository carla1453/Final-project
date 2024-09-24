import mongoose from "mongoose";

const userschema = new mongoose.Schema({
  name: { type: String, required: true },
  email: { type: String, required: true, unique: true },
  password: { type: String, required: true, minlength: 8 },
  age: { type: Number, required: true },
  Number: { type: Number, required: true },
  region: {
    type: String,
    required: true,
    enum: [
      "europe",
      "asia",
      "africa",
      "australia",
      "north america",
      "south america",
    ],
  },
});

const user = mongoose.model("user", userschema);
export default user;
