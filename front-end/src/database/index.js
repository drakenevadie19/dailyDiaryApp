import mongoose from "mongoose";

const connectToDB = async () => { //IkJuZtH762u03dtZ
    mongoose.connect('mongodb+srv://thanhnguyen14gers:IkJuZtH762u03dtZ@cluster0.clahwyv.mongodb.net/')
    .then(() => console.log("Database connected successfully"))
    .catch((e) => console.log(e));
}

export default connectToDB;