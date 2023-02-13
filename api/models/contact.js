const mongoose = require('mongoose');

const contactSchema = new mongoose.Schema({ 
    firstName: 'string',
    lastName: 'string',
    company: 'string',
    phoneNr: 'string',
    mail: 'string'
});
const Contact = mongoose.model('Contact', contactSchema);

module.exports = Contact;