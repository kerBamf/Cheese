require("dotenv").config()
const express = require('express')
const app = express()
const { PORT } = process.env
const cors = require('cors')
const morgan = require("morgan")
const cheeseController = require('./controllers/cheese.js')


//Middleware
app.use(cors());
app.use(morgan("dev"));
app.use(express.json());
app.use("/cheese", cheeseController)


//Routes

app.get("/", (req, res) => {
    res.send("Where all them cheeses at?")
})



app.listen(PORT, (req, res) => {
    console.log(`Behold, the wheels of cheese are turning on port ${PORT}!`)
})