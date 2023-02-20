import authStore from "../stores/authenticationStore";

export default function Logout() {
    const store = authStore();
    return (
        <div>
            <button onClick={store.logout}>Log out</button>
        </div>
    );
}