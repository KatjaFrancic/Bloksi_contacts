import './App.css';
import {useState, useEffect} from 'react';
import axios from 'axios';

function App() {
  // state 
  const [contacts, setContacts] = useState(null);
  const [updateForm, setUpdateForm] = useState({
    _id: null,
    firstName: '',
    lastName: '',
    company: '',
    phoneNr: '',
    mail: ''
  })

  // use effect 
  useEffect(() => {
    fetchContacts();
  }, []);

  //functions 
  const fetchContacts = async () => {
  // fetch contacts
  const res = await axios.get('http://localhost:3000/contacts');
  // set to state
  setContacts(res.data.contacts);
  console.log(res);
  };

  const deleteContact = async (_id) => {
    // delete contact
    const res = await axios.delete(`http://localhost:3000/contacts/${_id}`);
    
    // update state
    const newContacts = [...contacts].filter(contact => {
      return contact._id !== _id;
    });

    setContacts(newContacts);
  };

  const handleUpdateFieldChange = (e) => {
    const {value, name} = e.target

    setUpdateForm({
      ...updateForm,
      [name]: value,
    });
  };
  
  const toggleUpdate = (contact) => {
    // get current contact values
    console.log(contact);
    // set state on update form
    setUpdateForm({
      _id: contact._id,
      firstName: contact.firstName,
      lastName: contact.lastName,
      company: contact.company,
      phoneNr: contact.phoneNr,
      mail: contact.mail
    });
  };

const updateContact = async (e) => {
  e.preventDefault();

  const {firstName, lastName, company, phoneNr, mail } = updateForm;
  // send update request
  const res = await axios.put(`http://localhost:3000/contacts/${updateForm._id}`, {firstName, lastName, company, phoneNr, mail});
  
  // update state
  const newContacts = [... contacts];
  const contactIndex = contacts.findIndex((contact) => {
    return contact._id = updateForm._id;
  });
  newContacts[contactIndex] = res.data.contact;
  setContacts(newContacts);

  // clear update form state
  setUpdateForm({
    _id: null,
    firstName: '',
    lastName: '',
    company: '',
    phoneNr: '',
    mail: ''
  })
 

};

  return (
    <div className="App">
      <div>
        <h2>Contacts: </h2>
        {contacts && contacts.map(contact => {
          return <div key={contact._id}>
            <h3>{contact.firstName}</h3>
            <button onClick={() => deleteContact(contact._id)}>
              Delete contact
            </button>
            <button onClick={() => toggleUpdate(contact)}>
              Update contact
            </button>
        </div>
        
        })}
      </div>

      {updateForm._id && (
      <div>
        <h3>Update contact</h3>
        <form onSubmit={updateContact}>
          <label>First name: </label>
          <input onChange={handleUpdateFieldChange} value={updateForm.firstName} name="firstName" />
          <label>Last name: </label>
          <input onChange={handleUpdateFieldChange} value={updateForm.lastName} name="lastName" />
          <label>Company: </label>
          <input onChange={handleUpdateFieldChange} value={updateForm.company} name="company" />
          <label>Phone number: </label>
          <input onChange={handleUpdateFieldChange} value={updateForm.phoneNr} name="phoneNr" />
          <label>Mail: </label>
          <input onChange={handleUpdateFieldChange} value={updateForm.mail} name="mail" />
          <button type="submit">Update contact</button>
        </form> 
      </div>
      )} 
    </div>
  );
}

export default App;
