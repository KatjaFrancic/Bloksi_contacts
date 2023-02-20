import { create } from 'zustand';
import axios from 'axios';

const authStore = create((set) => ({
    loggedIn: null,
    
    loginForm: {
        username: '',
        password: '',
    },

    registrationForm: {
        username: '',
        password: '',
    },

    updateLoginForm: (e) => {
        const { name, value } = e.target;

        set((state) => {
            return {
                loginForm: {
                    ...state.loginForm,
                    [name]: value,
                },
            };
        });
    },

    login: async (e) => {

        const {loginForm} = authStore.getState();

        const res = await axios.post('/login', loginForm, {
            withCredentials: true,
        });

        set({loggedIn: true, loginForm: {
            username: '',
            password: '',
        }});

    },

    checkAuth: async () => {
        try {
        await axios.get('/check-auth');
        set({loggedIn: true});
        } catch(err) {
            set({loggedIn: false});
        }
    },

    updateRegistrationForm: (e) => {
        const { name, value } = e.target;

        set((state) => {
            return {
                registrationForm: {
                    ...state.registrationForm,
                    [name]: value,
                },
            };
        });
    },

    register: async () => {
        const {registrationForm} = authStore.getState();
        const res = await axios.post('/register', registrationForm)
        
        set({
            registrationForm: {
                username: '',
                password: '',
            }
        })

        console.log(res);

    },

    logout:  () => {
        set({loggedIn: false})
    }

}));

export default authStore;