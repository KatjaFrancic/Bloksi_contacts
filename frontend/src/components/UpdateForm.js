import contactsStore from "../stores/contactsStore";

export default function UpdateForm() {
    const store = contactsStore();
    if (!store.updateForm._id) return <></>;

    return (
        <div>
            <h3>Update contact</h3>
            <form onSubmit={store.updateContact}>
                <label>First name: </label>
                <input onChange={store.handleUpdateFieldChange} value={store.updateForm.firstName} name="firstName" />
                <label>Last name: </label>
                <input onChange={store.handleUpdateFieldChange} value={store.updateForm.lastName} name="lastName" />
                <label>Company: </label>
                <input onChange={store.handleUpdateFieldChange} value={store.updateForm.company} name="company" />
                <label>Phone number: </label>
                <input onChange={store.handleUpdateFieldChange} value={store.updateForm.phoneNr} name="phoneNr" />
                <label>Mail: </label>
                <input onChange={store.handleUpdateFieldChange} value={store.updateForm.mail} name="mail" />
                <button type="submit">Update contact</button>
            </form>
        </div>

    )
}