const Contact = require('../models/contact'); 
 
const fetchContacts = async (req, res) => {
    // find the contacts 
    const contacts = await Contact.find();
    // respond with them
    res.json ({contacts: contacts})
};

const fetchContact = async (req, res) => {
    // get id off the url
    const contactId = req.params.id;
    // find the contact using that id
    const contact = await Contact.findById(contactId);
    // respond with the contact
    res.json({contact: contact})
};

const createContact = async (req,res) => {
    // get the sent in data off request body
    const firstName = req.body.firstName;
    const lastName = req.body.lastName;
    const company = req.body.company;
    const phoneNr = req.body.phoneNr;
    const mail = req.body.mail;

    // create a contact with it
    const contact = await Contact.create({
        firstName: firstName,
        lastName: lastName,
        company: company,
        phoneNr: phoneNr,
        mail: mail
    });

    // respond with the new contact
    res.json({contact: contact})
    
};

const updateContact = async (req, res) => {
    // get the id off the url
    const contactId = req.params.id;

    // get the data off the req body
    const firstName = req.body.firstName;
    const lastName = req.body.lastName;
    const company = req.body.company;
    const phoneNr = req.body.phoneNr;
    const mail = req.body.mail;

    // find and update contact
    await Contact.findByIdAndUpdate(contactId, {
        firstName: firstName,
        lastName: lastName,
        company: company,
        phoneNr: phoneNr,
        mail: mail
    })

    // find updated contact
    const contact = await Contact.findById(contactId);

    // respond with updated contact
    res.json({contact: contact})
};

const deleteContact = async (req, res) => {
    // get id off url
    const contactId = req.params.id;

    // delete contact
    await Contact.deleteOne({_id : contactId});

    // respond 
    res.json({success: "Contact deleted"});
};

module.exports = {
    fetchContacts, 
    fetchContact,
    createContact,
    updateContact,
    deleteContact
};