import './Login.scss';
import { useEffect, useState } from 'react';
import { usersBase } from '../../store/initialState';

export const Login = ({
  setToRegistration,
  setRegistered,
  setChoosenUser
}) => {
  const [missPassword, setMissPassword] = useState(false);
  const [choosenLogin, setChoosenLogin] = useState('');
  const [password, setPassword] = useState('');
  const [usersFromLocal, setUsersFromLocal] = useState(JSON.parse(localStorage.getItem('users')) || usersBase);
  
  // useEffect(() => {
  //   let users = JSON.parse(localStorage.getItem('users'));
  //   setUsersFromLocal(users);
  // }, []);

  const handleSubmit = (event) => {
    event.preventDefault();

    if (!usersFromLocal.map((user) => user.login).includes(choosenLogin)) {
      setToRegistration(true);
      return;
    }

    setChoosenUser(choosenLogin);

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