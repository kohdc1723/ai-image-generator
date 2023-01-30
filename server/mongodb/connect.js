import mongoose from "mongoose";

const connectDb = (url, callback) => {
    mongoose.set("strictQuery", true);
    mongoose.connect(url)
        .then((result) => {
            console.log("MongoDB connected");
            callback();
        })
        .catch((err) => {
            console.error(err);
        });
}

export default connectDb;