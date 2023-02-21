const Contact = require('../models/contact');

const fetchContacts = async (req, res) => {
    try {
        // find the contacts 
        const contacts = await Contact.find({ user: req.user._id });
        // respond with them
        res.json({ contacts: contacts })
    } catch (err) {
        console.log(err);
        res.sendStatus(400);
    }
};

const fetchContact = async (req, res) => {
    try {

        // get id off the url
        const contactId = req.params.id;
        // find the contact using that id
        const contact = await Contact.findOne({ _id: contactId, user: req.user._id });
        // respond with the contact
        res.json({ contact: contact })
    } catch (err) {
        console.log(err);
        res.sendStatus(400);
    }
};

const createContact = async (req, res) => {
    try {
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
            mail: mail,
            user: req.user._id,
        });

        // respond with the new contact
        res.json({ contact: contact })

    } catch (err) {
        console.log(err);
        res.sendStatus(400);
    }

};

const updateContact = async (req, res) => {
    try {
    // get the id off the url
    const contactId = req.params.id;

    // get the data off the req body
    const firstName = req.body.firstName;
    const lastName = req.body.lastName;
    const company = req.body.company;
    const phoneNr = req.body.phoneNr;
    const mail = req.body.mail;

    // find and update contact
    await Contact.findOneAndUpdate({ _id: contactId, user: req.user._id },
        {
            firstName: firstName,
            lastName: lastName,
            company: company,
            phoneNr: phoneNr,
            mail: mail
        })

    // find updated contact
    const contact = await Contact.findById(contactId);

    // respond with updated contact
    res.json({ contact: contact })
    } catch (err) {
        console.log(err);
        res.sendStatus(400);
    }
};

const deleteContact = async (req, res) => {
    try {
    // get id off url
    const contactId = req.params.id;

    // delete contact
    await Contact.deleteOne({ _id: contactId, user: req.user._id });

    // respond 
    res.json({ success: "Contact deleted" });
    } catch (err) {
        console.log(err);
        res.sendStatus(400);
    }
};

module.exports = {
    fetchContacts,
    fetchContact,
    createContact,
    updateContact,
    deleteContact
};