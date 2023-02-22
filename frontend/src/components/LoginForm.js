import authStore from "../stores/authenticationStore";
import React from 'react';
import { useNavigate } from 'react-router-dom';

export default function LoginForm() {
    const store = authStore();
    const navigate = useNavigate();

    const handleLogin = async (e) => {
        e.preventDefault();
        await store.login();

        // Navigate
        navigate('/')
    };

    return (
        <div>
            <table>
                <td><form onSubmit={handleLogin}>
                    <tr>
                        <td><label>Username: </label></td>
                        <td><input onChange={store.updateLoginForm}
                            value={store.loginForm.username}
                            type="username" name="username"
                        />
                        </td>
                    </tr>
                    <tr>
                        <td>
                            <label>Password: </label></td>
                        <td><input onChange={store.updateLoginForm}
                            value={store.loginForm.password}
                            type="password" name="password"
                        />
                        </td>
                    </tr>
                    <button type="submit">Log in</button>
                </form>
                </td>
            </table>
        </div>

    );
}