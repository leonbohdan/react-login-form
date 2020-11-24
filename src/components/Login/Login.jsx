import './Login.scss';
import { useEffect, useState } from 'react';

export const Login = () => {
  const [choosenLogin, setChoosenLogin] = useState('');
  const [password, setPassword] = useState('');
  const [usersFromLocal, setUsersFromLocal] = useState([]);
  
  useEffect(() => {
    let users = JSON.parse(localStorage.getItem("users"));
    setUsersFromLocal(users);
  }, []);

  console.log(choosenLogin);
  console.log(password);
  console.log(usersFromLocal);
  
  return (
    <>
      <h1>Sign in form</h1>

      <form
        onSubmit={(event) => {
          event.preventDefault();
        }}
      >
        <input
          type="text"
          name="users"
          list="users"
          value={choosenLogin}
          onChange={(event) => {
            setChoosenLogin(event.target.value);
          }}
        />
        <datalist
          id="users"
          name="users"
          value={choosenLogin}
          onChange={(event) => {
            setChoosenLogin(event.target.value);
          }}
        >
          <option value="">Choose your login or input new one</option>
          {usersFromLocal.map((user) => (
            <option key={user.id} value={user.login}>
              {user.login}
            </option>
          ))}
        </datalist>
        
        <input
          type="password"
          name="password"
          placeholder="Password"
          value={password}
          onChange={(event) => {
            setPassword(event.target.value);
          }}
        />

        <button type="submit">Sign in</button>
      </form>
    </>
  );
}