import contactsStore from "../stores/contactsStore";
import Contact from "./Contact";

export default function Contacts() {
    const store = contactsStore();
    return (
        <div>
            <h2>Contacts: </h2>
            {store.contacts && 
            store.contacts.map(contact => {
                return (
                    <Contact contact={contact} key={contact._id} />
                );
            })}
        </div>
    );
}