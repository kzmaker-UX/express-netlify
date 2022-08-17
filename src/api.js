
const express = require("express")
const serverless = require("serverless-http")
const { collection, ObjectId } = require("../config/database")

const app = express()
const router = express.Router()

router.get("/", (req, res) => {
    // res.send("User List")
    collection.find().toArray((err, result) => {
        if (err) throw err;
        res.json(result)
    })
})


router.post("/", (req, res) =>{
    res.send("create new user")
})

router 
    .router("/:id")
    .get((req, res) => {
        res.send (`get a user with ID: ${req.params.id}`)
    })
    .put((req, res) => {
        res.send (`Update a user with ID: ${req.params.id}`)
    })
    .delete((req, res) => {
        res.send (`delete a user with ID: ${req.params.id}`)
    })

app.use("/.netlify/functions/api", router)
module.exports.handler = serverless(app)