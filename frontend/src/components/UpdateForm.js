import contactsStore from "../stores/contactsStore";

export default function UpdateForm() {
    const store = contactsStore();
    if (!store.updateForm._id) return <></>;

    return (
        <div>
            <h3>Update contact</h3>
            <table>
                <td><form onSubmit={store.updateContact}>
                    <tr>
                        <td><label>First name: </label></td>
                        <td><input onChange={store.handleUpdateFieldChange}
                            value={store.updateForm.firstName}
                            type="updateContact"
                            name="firstName" />
                        </td>
                    </tr>
                    <tr>
                        <td>
                            <label>Last name: </label>
                        </td>
                        <td>
                            <input onChange={store.handleUpdateFieldChange}
                                value={store.updateForm.lastName}
                                type="updateContact"
                                name="lastName" />
                        </td>
                    </tr>
                    <tr>
                        <td><label>Company: </label></td>
                        <td><input onChange={store.handleUpdateFieldChange} 
                        value={store.updateForm.company} 
                        type="updateContact"
                        name="company" />
                        </td></tr>
                    <tr>
                        <td><label>Phone number: </label></td>
                        <td><input onChange={store.handleUpdateFieldChange} 
                        value={store.updateForm.phoneNr} 
                        type="updateContact"
                        name="phoneNr" />
                        </td>
                    </tr>
                    <tr>
                        <td><label>Mail: </label></td>
                        <td><input onChange={store.handleUpdateFieldChange} 
                        value={store.updateForm.mail} 
                        type="updateContact"
                        name="mail" />
                        </td></tr>
                    <button type="submit">Save changes</button>
                </form>
                </td>
            </table>

        </div>

    )
}