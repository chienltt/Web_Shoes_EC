import express from "express";
const routerAdmin = express.Router()
routerAdmin.use('/', (req, res) => {
    res.json({
        message: "this is Admin "
    })
})

export default routerAdmin; 