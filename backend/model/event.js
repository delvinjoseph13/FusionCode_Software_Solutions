import mongoose from "mongoose";

const eventScehma=new mongoose.Schema({
  title: String,
  start: Date,
  end: Date,
  user: String
})

const eventModel=mongoose.model("event",eventScehma)

export default eventModel;