const mongoose = require('mongoose');

const contactSchema = new mongoose.Schema({ 
    firstName: String,
    lastName: String,
    company: String,
    phoneNr: String,
    mail: String
});
const Contact = mongoose.model('Contact', contactSchema);

module.exports = Contact;