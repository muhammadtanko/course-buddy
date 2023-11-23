import mongoose, { Schema } from "mongoose";

mongoose.connect("mongodb+srv://ddld93:1234567890@cluster0.fljiocn.mongodb.net");

mongoose.Promise = global.Promise;

const userSchema = new Schema(
  {
    name: String,
    email: String,
    password: String,
  },
  {
    timestamps: true,
  }
);

const User = mongoose.models.User || mongoose.model("User", userSchema);

export default User;
