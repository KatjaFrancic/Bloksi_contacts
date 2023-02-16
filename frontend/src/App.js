import './App.css';
import {useState, useEffect} from 'react';
import axios from 'axios';

function App() {
  // state 
  const [contacts, setContacts] = useState(null);

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
        </div>
        })}
      </div>
    </div>
  );
}

export default App;
