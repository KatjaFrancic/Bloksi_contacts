import '../components/App.css';
import { useEffect } from "react";
import Contacts from "../components/Contacts";
import UpdateForm from "../components/UpdateForm";
import contactsStore from "../stores/contactsStore";

export default function ContactsPage() {
    const store = contactsStore();

    // use effect 
    useEffect(() => {
      store.fetchContacts();
    }, []);
    
    return (
        <div>
            <Contacts />
            <UpdateForm/>
        </div>
    )
}