//connect to database
//connect to database
import mongoose from "mongoose"
const connectDb = async () => {
    const mongoDbURL = process.env.MONGODBURL
    console.log("Connecting to database ...")
    mongoose.Promise = global.Promise
    await mongoose.connect(
        mongoDbURL,
        {
            useNewUrlParser: true,
            useUnifiedTopology: true
        }
    ).then(() => {
        console.log("Connected successfully to database!")
    })
        .catch((err) => {
            console.log("error occured: ", err)
        })
}
export default connectDb;