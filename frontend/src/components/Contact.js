
import contactsStore from "../stores/contactsStore";

export default function Contact({ contact }) {
    const store =
        contactsStore(store => {
            return {
                deleteContact: store.deleteContact,
                toggleUpdate: store.toggleUpdate
            };
        })

    return (
        <div key={contact._id}>
            <table>
                <h3>{contact.firstName} {contact.lastName}</h3>
                <h4>{contact.phoneNr}</h4>
                <tr>
                    <td>
                        <div class='icon'>
                            <i class='gg-mail'></i>
                        </div>
                    </td>
                    <td>
                        <label> {contact.mail} </label>
                    </td>
                </tr>
                <tr>
                    <td>
                        <div class='icon'>
                            <i class='gg-briefcase'></i>
                        </div>                    </td>
                    <td>
                        <label> {contact.company} </label>
                    </td>
                </tr>
            </table>

            <div><button onClick={() => store.toggleUpdate(contact)}>
                Update contact
            </button>
                <button class="btn-danger" onClick={() => store.deleteContact(contact._id)}>
                    Delete contact
                </button>
            </div>
        </div>
    )
}