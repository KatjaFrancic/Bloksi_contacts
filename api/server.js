
require("dotenv").config()

//import dependencies
const express = require('express');
const conntectDb = require("./config/db");
const contactsController = require('./controllers/contactsController');
const cors = require('cors');
const usersController = require('./controllers/usersController');
const cookieParser = require('cookie-parser');
const requireAuth = require('./middleware/requireAuth');

//create an express app 
const app = express();

// configure express app
app.use(express.json());
app.use(cors({
    origin: true,
    credentials: true,
}));
app.use(cookieParser());

//connect to database
conntectDb();

// routing
app.get('/contacts', requireAuth, contactsController.fetchContacts);
app.get('/contacts/:id', requireAuth, contactsController.fetchContact);
app.post('/contacts', requireAuth, contactsController.createContact);
app.put('/contacts/:id', requireAuth, contactsController.updateContact);
app.delete('/contacts/:id', requireAuth, contactsController.deleteContact);

app.post('/register', usersController.register);
app.post('/login', usersController.login);
app.get('/check-auth', requireAuth, usersController.checkAuth);

app.listen(process.env.PORT, () => {
    console.log(`App is listening at http://localhost:${process.env.PORT}`)
})