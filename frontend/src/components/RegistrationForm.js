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
        <form onSubmit={handleRegistration}>
            <input onChange={store.updateRegistrationForm} 
            value={store.registrationForm.username} 
            type="username" name="username"
            />
            <input onChange={store.updateRegistrationForm} 
            value={store.registrationForm.password}
            type="password" name="password" 
            />
            <button type="submit">Register</button>
        </form>
        </div>
    );
}