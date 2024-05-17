import mongoose from "mongoose";

const connectToDB = async () => {
    mongoose.connect('mongodb+srv://thanhnguyen14gers:wONnFfiTHq80zI66@cluster0.flb3538.mongodb.net/')
    .then(() => console.log("Database connected successfully"))
    .catch((e) => console.log(e));
}

export default connectToDB;