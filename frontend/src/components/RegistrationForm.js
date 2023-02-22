import authStore from "../stores/authenticationStore";
import { useNavigate } from "react-router-dom";
export default function RegistrationForm() {
    const store = authStore();
    const navigate = useNavigate();

    const handleRegistration = async (e) => {
        e.preventDefault();
        await store.register();
        navigate('/login');
    }
    return (
        <div>
            <table>
                <td>
                    <form onSubmit={handleRegistration}>
                        <tr>
                            <td><label>Username: </label></td>
                            <td><input onChange={store.updateRegistrationForm}
                                value={store.registrationForm.username}
                                type="username" name="username"
                            />
                            </td>
                        </tr>
                        <tr>
                            <td><label>Password: </label></td>
                            <td><input onChange={store.updateRegistrationForm}
                                value={store.registrationForm.password}
                                type="password" name="password"
                            />
                            </td>
                        </tr>
                        <button type="submit">Register</button>
                    </form>
                </td>
            </table>
        </div>
    );
}