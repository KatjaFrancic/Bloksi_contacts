
require("dotenv").config()

const express = require('express');
const conntectDb = require("./config/db");
const Contact = require('./models/contact')

//create and configure express app
const app = express();
app.use(express.json());

//connect to database
conntectDb();

app.get('/', (req, res) => {
    res.json({Hellllo: "hello"})
})

app.post('/contacts', async (req,res) => {
    const firstName = req.body.firstName;
    const lastName = req.body.lastName;
    const company = req.body.company;
    const phoneNr = req.body.phoneNr;
    const mail = req.body.mail;

    const contact = await Contact.create({
        firstName: firstName,
        lastName: lastName,
        company: company,
        phoneNr: phoneNr,
        mail: mail
    });

    res.json({contact: contact})
    
})


app.listen(process.env.PORT, () => {
    console.log(`App is listening at http://localhost:${process.env.PORT}`)
})