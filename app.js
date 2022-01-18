const express = require('express')
const helmet = require('helmet')
const morgan = require('morgan')
const cors = require('cors')
const dotenv = require('dotenv')
const bodyParser = require('body-parser')

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
const port = process.env.PORT

app.use("/", (req, res) => {
    res.json({
        message: "Server running!"
    })
})

app.listen(port, () => console.log(`Server running on port ${port}`))