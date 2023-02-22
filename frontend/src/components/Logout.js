import authStore from "../stores/authenticationStore";

export default function Logout() {
    const store = authStore();
    
    if(store.loggedIn === true) {
        return <button class="btn-danger" onClick={store.logout}>Log out</button>
    }

}