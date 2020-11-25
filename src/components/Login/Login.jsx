import './Login.scss';
import { useEffect, useState } from 'react';

export const Login = ({
  setToRegistration, setRegistered
}) => {
  const [missPassword, setMissPassword] = useState(false);
  const [choosenLogin, setChoosenLogin] = useState('');
  const [password, setPassword] = useState('');
  const [usersFromLocal, setUsersFromLocal] = useState([]);
  
  useEffect(() => {
    let users = JSON.parse(localStorage.getItem('users'));
    setUsersFromLocal(users);
  }, []);

  console.log(choosenLogin);
  console.log(password);
  console.log(usersFromLocal);

  const handleSubmit = (event) => {
    event.preventDefault();
    console.log("submit");

    console.log(usersFromLocal.map((user) => user.login).includes(choosenLogin));

    if (!usersFromLocal.map((user) => user.login).includes(choosenLogin)) {
      setToRegistration(true);
      return;
    }

    if (usersFromLocal.find(
      user => (user.login === choosenLogin)
    ).password + '' !== password) {
      setMissPassword(true);
      return;
    }

    usersFromLocal.map((user) => user.login).includes(choosenLogin)
      ? setRegistered(true)
      : setToRegistration(true);
  };
  
  return (
    <>
      <h1>Sign in form</h1>
      <h2>Choose your login and password or input new for registration</h2>

      <form onSubmit={handleSubmit}>
        <input
          type="text"
          name="users"
          list="users"
          required
          placeholder="Login"
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
          required
          value={password}
          onChange={(event) => {
            setPassword(event.target.value);
          }}
        />

        {missPassword ? (
          <span>Check your password</span>
        ) : ('')}

        {choosenLogin && password ? (
          <button type="submit">Sign in</button>
        ) : (
          <button type="submit" disabled>
            Sign in
          </button>
        )}
      </form>
    </>
  );
}