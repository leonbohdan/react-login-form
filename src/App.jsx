import './App.scss';
import { useState, useEffect } from 'react';
import { usersBase } from './store/initialState';
import { Login } from './components/Login/Login';

function App() {
  const [users, setUsers] = useState(usersBase);

  useEffect(() => {
    localStorage.setItem("users", JSON.stringify(users));
  }, [users]);

  return (
    <div className="App">
      <Login />
    </div>
  );
}

export default App;
