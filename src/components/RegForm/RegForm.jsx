import './RegForm.scss';
import 'bulma';
import { useEffect, useState } from 'react';
import { date } from '../../store/initialState';

export const RegForm = ({
  setToRegistration,
  setRegistered,
  setChoosenUser
}) => {
  const [password, setPassword] = useState('');
  const [localState, setLocalState] = useState(
    JSON.parse(localStorage.getItem('users')) || ''
  );
  const [newUser, setNewUser] = useState({
    id: new Date().getTime(),
    isActive: false,
    name: "",
    lastname: "",
    position: "",
    phone: "",
    registered: date(),
    login: "",
    password: "",
  });

  const handleSubmit = (event) => {
    event.preventDefault();

    setLocalState([
      ...localState,
      newUser,
    ]);

    setTimeout(() => {
      setChoosenUser(newUser.id);
      setToRegistration(false);
      setRegistered(true);
    }, 1000);
  };

  useEffect(() => {
    localStorage.setItem("users", JSON.stringify(localState));
  }, [localState]);

  return (
    <div className="registration">
      <h1 className="registration__heading">RegForm</h1>
      <h2 className="registration__description">
        Fill information to registrate you as a new member
      </h2>

      <form className="registration__form form" onSubmit={handleSubmit}>
        <label htmlFor="name" className="registration__label label">
          Name
          <input
            type="text"
            id="name"
            placeholder="Name"
            pattern="[A-Za-z]{3,12}"
            title="Name must be between 3 and 12 characters in length and contain only letters"
            required
            className="registration__input input"
            value={newUser.name}
            onChange={(event) => {
              setNewUser({
                ...newUser,
                name: event.target.value,
              });
            }}
          />
        </label>

        <label className="registration__label label" htmlFor="lastname">
          Lastname
          <input
            type="text"
            id="lastname"
            placeholder="Lastname"
            pattern="[A-Za-z]{3,12}"
            title="Lastname must be between 3 and 12 characters in length and contain only letters"
            required
            className="registration__input input"
            value={newUser.lastname}
            onChange={(event) => {
              setNewUser({
                ...newUser,
                lastname: event.target.value,
              });
            }}
          />
        </label>

        <label className="registration__label label" htmlFor="position">
          Position
          <input
            type="text"
            id="position"
            placeholder="Posititon"
            pattern="[A-Za-z0-9\s]{6,20}"
            title="Position must be between 6 and 20 characters in length and contain only letters and numbers"
            required
            className="registration__input input"
            value={newUser.position}
            onChange={(event) => {
              setNewUser({
                ...newUser,
                position: event.target.value,
              });
            }}
          />
        </label>

        <label className="registration__label label" htmlFor="phone">
          Phone
          <input
            type="text"
            id="phone"
            placeholder="Phone"
            pattern="[+]{1}[0-9]{12,20}"
            title="Number must start with (+) and contain 12-20 numbers"
            required
            className="registration__input input"
            value={newUser.phone}
            onChange={(event) => {
              setNewUser({
                ...newUser,
                phone: event.target.value,
              });
            }}
          />
        </label>

        <label className="registration__label label" htmlFor="login">
          Login
          <input
            type="text"
            id="login"
            placeholder="Login"
            pattern="[A-Za-z0-9]{4,12}"
            title="Login must be between 4 and 12 characters in length and contain only letters and numbers"
            required
            className="registration__input input"
            value={newUser.login}
            onChange={(event) => {
              setNewUser({
                ...newUser,
                login: event.target.value,
              });
            }}
          />
        </label>

        <label className="registration__label label" htmlFor="password1">
          Password
          <input
            type="password"
            id="password1"
            placeholder="Password"
            pattern="[\d]{4,16}"
            title="Password must be between 4 and 16 characters in length and contain only numbers"
            required
            className="registration__input input"
            value={password}
            onChange={(event) => {
              setPassword(event.target.value);
            }}
          />
        </label>

        <label className="registration__label label" htmlFor="password2">
          Repeat Password
          <input
            type="password"
            id="password2"
            placeholder="Repeat Password"
            pattern="[\d]{4,16}"
            title="Password must be between 4 and 16 characters in length and contain only numbers"
            required
            className="registration__input input"
            value={newUser.password}
            onChange={(event) => {
              setNewUser({
                ...newUser,
                password: event.target.value,
              });
            }}
          />
        </label>

        {password !== newUser.password ? (
          <span className="registration__wrongPass">
            Passwords are not equal
          </span>
        ) : (
          ""
        )}

        <button
          type="submit"
          className="registration__button button is-primary"
        >
          Register
        </button>
      </form>
    </div>
  );
}
