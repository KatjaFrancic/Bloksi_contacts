
require("dotenv").config()

//import dependencies
const express = require('express');
const conntectDb = require("./config/db");
const contactsController = require('./controllers/contactsController');
const cors = require('cors');

//create and configure express app
const app = express();
app.use(express.json());
app.use(cors());

//connect to database
conntectDb();

// routing
app.get('/contacts', contactsController.fetchContacts);
app.get('/contacts/:id', contactsController.fetchContact);
app.post('/contacts', contactsController.createContact);
app.put('/contacts/:id', contactsController.updateContact);
app.delete('/contacts/:id', contactsController.deleteContact);


app.listen(process.env.PORT, () => {
    console.log(`App is listening at http://localhost:${process.env.PORT}`)
})