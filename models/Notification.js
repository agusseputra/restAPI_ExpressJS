import mongoose from "mongoose";
import { Timestamp } from "bson";
const Notification = mongoose.Schema({
    reqID: {
        type: String,
        require: true
    },
    title: {
        type: String,
        require: true
    },
    description: {
        type: String,
    },
    userID: {
        type: Number,
        require: true
    },
    file: {
        type: String
    }
}, {
    timestamps: true,
});
export default mongoose.model("Notifications", Notification);