const mongoose = require('mongoose');

const contactSchema = new mongoose.Schema({ 
    firstName: String,
    lastName: String,
    company: String,
    phoneNr: String,
    mail: String,
    user: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'User',
        
    }
});
const Contact = mongoose.model('Contact', contactSchema);

module.exports = Contact;