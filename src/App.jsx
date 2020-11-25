import './App.scss';
import { useState, useEffect } from 'react';
import { usersBase } from './store/initialState';
import { Login } from './components/Login/Login';
import { RegForm } from './components/RegForm/RegForm';
import { UserPage } from './components/UserPage/UserPage';

function App() {
  const [users, setUsers] = useState(usersBase);
  const [toRegistration, setToRegistration] = useState(false);
  const [registered, setRegistered] = useState(true);

  console.log(toRegistration, registered);

  useEffect(() => {
    if (localStorage.getItem('users') !== null) {
      return;
    }
    localStorage.setItem('users', JSON.stringify(users));
  }, [users]);

  return (
    <div className="App">
      {toRegistration || registered ?
        ('')
        :
        (<Login
          setToRegistration={setToRegistration}
          setRegistered={setRegistered}
        />)
      }

      {toRegistration ? (<RegForm />) : ('')}
      
      {registered ? (<UserPage />) : ('')}
    </div>
  );
}

export default App;
