import mongoose, { model, Schema } from "mongoose";

mongoose.connect("mongodb+srv://me:9pEW5mcgRTOqS0TD@second-brain.rlwi4.mongodb.net/brainly");

const UserSchema = new Schema({
    username: {type: String, unique: true},
    password: String
})

export const UserModel = model("User", UserSchema);


