
require("dotenv").config()
const express = require('express')
const conntectDb = require("./config/db")

const app = express();

conntectDb();

app.get('/', (req, res) => {
    res.json({Hellllo: "hello"})
})


app.listen(process.env.PORT, () => {
    console.log(`App is listening at http://localhost:${process.env.PORT}`)
})