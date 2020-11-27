import './App.scss';
import { useState, useEffect } from 'react';
import { usersBase } from './store/initialState';
import { Login } from './components/Login/Login';
import { RegForm } from './components/RegForm/RegForm';
import { UserPage } from './components/UserPage/UserPage';

function App() {
  const [users, setUsers] = useState(usersBase);
  const [toRegistration, setToRegistration] = useState(false);
  const [registered, setRegistered] = useState(false);
  const [choosenUser, setChoosenUser] = useState(0);

  useEffect(() => {
    if (localStorage.getItem('users') !== null) {
      return;
    }

    localStorage.setItem('users', JSON.stringify(users));
  }, [users]);

  return (
    <div className="App section">
      {!(toRegistration || registered) && (
        <Login
          setToRegistration={setToRegistration}
          setRegistered={setRegistered}
          setChoosenUser={setChoosenUser}
        />
      )}

      {toRegistration && (
        <RegForm
          setToRegistration={setToRegistration}
          setRegistered={setRegistered}
          setChoosenUser={setChoosenUser}
        />
      )}

      {registered && <UserPage choosenUser={choosenUser} />}

      <div className="App__footer"></div>
    </div>
  );
}

export default App;
