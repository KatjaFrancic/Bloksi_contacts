import { create } from 'zustand';
import axios from 'axios';

const contactsStore = create((set) => ({
    contacts: null,

    updateForm: {
        _id: null,
        firstName: '',
        lastName: '',
        company: '',
        phoneNr: '',
        mail: ''
    },

    fetchContacts: async () => {
        // fetch contacts
        const res = await axios.get('/contacts');
        
        // set to state
        set({contacts: res.data.contacts})
    },

    deleteContact: async (_id) => {
        // delete contact
        const res = await axios.delete(`/contacts/${_id}`);
        const {contacts} = contactsStore.getState();
        
        // update state
        const newContacts = contacts.filter(contact => {
          return contact._id !== _id;
        });
    
        set({contacts: newContacts});
    },

    handleUpdateFieldChange: (e) => {
        const {value, name} = e.target
    
        set((state) => {
            return {
                updateForm: {
                    ...state.updateForm,
                    [name]: value,
                },
            };
        });
    },

    toggleUpdate: ({_id, firstName, lastName, company, phoneNr, mail}) => {
        set({ updateForm: {
           _id, firstName, lastName, company, phoneNr, mail
        }
        });
    },

    updateContact: async (e) => {
        e.preventDefault();

        const {
            updateForm: {_id, firstName, lastName, company, phoneNr, mail},
            contacts,
        } = contactsStore.getState();
        // send update request
        const res = await axios.put(`contacts/${_id}`, {
            firstName, lastName, company, phoneNr, mail
        });
        
        // update state
        const newContacts = [...contacts];
        const contactIndex = contacts.findIndex((contact) => {
          return contact._id === _id;
        });
        newContacts[contactIndex] = res.data.contact;
        
        set({
            contacts: newContacts,
            updateForm: {
                id_: null,
                firstName: '',
                lastName: '',
                company: '',
                phoneNr: '',
                mail: ''
            },
        });
    },

}));


export default contactsStore;