
import contactsStore from "../stores/contactsStore";

export default function Contact({contact}) {
    const store = 
    contactsStore(store => {
        return { deleteContact: store.deleteContact, 
            toggleUpdate: store.toggleUpdate
        };
    })

    return (
        <div key={contact._id}>
            <h3>{contact.firstName}</h3>
            <button onClick={() => store.deleteContact(contact._id)}>
                Delete contact
            </button>
            <button onClick={() => store.toggleUpdate(contact)}>
                Update contact
            </button>
        </div>
    )
}