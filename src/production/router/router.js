import express from "express";
const routerProduction = express.Router()
routerProduction.use('/', (req, res) => {
    res.json({
        message: "This is Production"
    })
})

export default routerProduction;