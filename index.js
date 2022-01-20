import express from "express"
import helmet from "helmet"
import morgan from "morgan"
import cors from "cors"
import dotenv from "dotenv"
import bodyParser from "body-parser"
import connectDb from "./src/connection.js"
import routerAdmin from "./src/admin/router/router.js"
import routerProduction from "./src/production/router/router.js"

const app = express()
app.use(helmet())
app.use(morgan("dev"))
app.use(cors())
app.use(bodyParser.urlencoded({
    extended: false
}))
app.use(bodyParser.json())
app.use(express.json())
dotenv.config()
const connectDb_ = async () => {
    await connectDb()
}
connectDb_()
const port = process.env.PORT

// app.use("/", (req, res) => {
//     res.json({
//         message: "Server running!"
//     })
// })
app.use("/admin", routerAdmin)
app.use("/production", routerProduction)

app.listen(port, () => console.log(`Server running on port ${port}`))