import './Login.scss';
import 'bulma';
import { useState } from 'react';
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

  const handleSubmit = (event) => {
    event.preventDefault();

    if (!usersFromLocal.map((user) => user.login).includes(choosenLogin)) {
      setToRegistration(true);
      return;
    } else {
      usersFromLocal.filter((user) => {
        if (user.login === choosenLogin) {
          setChoosenUser(user.id);
        }
        return -1;
      });
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
    <div className="login">
      <h1 className="login__heading">Sign in form</h1>
      <h2 className="login__description">
        Choose your login and password or input new for registration
      </h2>

      <form
        className="login__form form"
        onSubmit={handleSubmit}
      >
        <input
          className="login__input input"
          type="text"
          name="users"
          list="users"
          placeholder="Login"
          pattern="[A-Za-z0-9]{4,12}"
          title="Login must be between 4 and 12 characters in length and contain only letters and numbers"
          required
          value={choosenLogin}
          onChange={(event) => {
            setChoosenLogin(event.target.value);
          }}
        />
        <datalist
          className="login__datalist"
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
          className="login__input input"
          type="password"
          name="password"
          placeholder="Password"
          pattern="[A-Za-z0-9]{4,12}"
          title="Password must be between 4 and 12 characters in length and contain only letters and numbers"
          required
          value={password}
          onChange={(event) => {
            setPassword(event.target.value);
          }}
        />


        <button className="login__button button" type="submit">
          Sign in
        </button>

        {missPassword && (
          <span className="login__wrongPassword">Check your password</span>
        )}
      </form>
    </div>
  );
}
