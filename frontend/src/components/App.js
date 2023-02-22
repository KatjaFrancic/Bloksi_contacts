import './App.css';
import ContactsPage from '../pages/ContactsPage';
import LoginPage from '../pages/LoginPage';
import { BrowserRouter, Routes, Route, Link } from 'react-router-dom';
import RequireAuth from './RequireAuth';
import RegistrationPage from '../pages/RegistrationPage';
import { useEffect } from 'react';
import Logout from './Logout';
import authStore from '../stores/authenticationStore';

function App() {

  useEffect(() => {
    document.title = "Contacts"
  }, []);

  const store = authStore();

  if (store.loggedIn === true) {
    return (
      <div className="App">
        <BrowserRouter>
          <ul>
            <li>
              <Link to="/">Contact List</Link>
            </li>
            <li><Logout /></li>
          </ul>
          <Routes>
            <Route index element={<RequireAuth>
              <ContactsPage />
            </RequireAuth>} />
          </Routes>
        </BrowserRouter>
      </div>)
  }

  else {
    return (
      <div className="App">
        <BrowserRouter>
          <ul>
            <li>
              <Link to="/">Contact List</Link>
            </li>
            <li>
              <Link to="/login">Login</Link>
            </li>
            <li>
              <Link to="/register">Register</Link>
            </li>
          </ul>
          <Routes>
            <Route index element={<RequireAuth>
              <ContactsPage />
            </RequireAuth>} />
            <Route path='/login' element={<LoginPage />} />
            <Route path='/register' element={<RegistrationPage />} />
          </Routes>
        </BrowserRouter>
      </div>
    );
  }
}

export default App;
