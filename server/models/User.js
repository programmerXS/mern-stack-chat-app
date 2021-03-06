import mongoose from "mongoose";

const Schema = mongoose.Schema;

const userSchema = new Schema({
  username: String,
  salt: String,
  hash: String,
});

const User = mongoose.model("User", userSchema);

export default User;
