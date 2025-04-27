import mongoose from "mongoose";

const LeaderSchema  = new mongoose.Schema({
    username:String,
    password:String
})


const LeaderModel = mongoose.model("leaders",LeaderSchema)
export default LeaderModel