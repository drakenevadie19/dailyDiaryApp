import mongoose from "mongoose";

const connectToDB = async () => {
    mongoose.connect(
        'mongodb+srv://thanhnguyen14gers:Yr3qfOo8kWp0ehre@cluster0.clahwyv.mongodb.net/'
    ).then(() => console.log("Database connected successfully"))
    .catch((e) => console.log(e));
}

export default connectToDB;