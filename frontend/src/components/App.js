import './App.css';
import {useState, useEffect} from 'react';
import axios from 'axios';
import contactsStore from '../stores/contactsStore';
import Contacts from './Contacts';
import UpdateForm from './UpdateForm';

function App() {
  const store = contactsStore();

  // use effect 
  useEffect(() => {
    store.fetchContacts();
  }, []);

  return (
    <div className="App">
      <Contacts />

      <UpdateForm/>
    </div>
  );
}

export default App;
