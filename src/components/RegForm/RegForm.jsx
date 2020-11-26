import './RegForm.scss';
import { useEffect, useState } from 'react';

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
    registered: new Date(),
    login: "",
    password: "",
  });

  console.log(newUser);
  console.log(localState);

  const handleSubmit = (event) => {
    event.preventDefault();

    setLocalState([
      ...localState,
      newUser,
    ]);

    setTimeout(() => {
      setChoosenUser(newUser.login);
      setToRegistration(false);
      setRegistered(true);
    }, 1000);
  };

  useEffect(() => {
    localStorage.setItem("users", JSON.stringify(localState));
  }, [localState]);

  return (
    <>
      <h1>RegForm</h1>
      <h2>Fill information to registrate you as a new member</h2>

      <form onSubmit={handleSubmit}>
        <label htmlFor="name">
          Name
          <input
            type="text"
            id="name"
            placeholder="Name"
            required
            value={newUser.name}
            onChange={(event) => {
              setNewUser({
                ...newUser,
                name: event.target.value,
              });
            }}
          />
        </label>

        <label htmlFor="lastname">
          Lastname
          <input
            type="text"
            id="lastname"
            placeholder="Lastname"
            required
            value={newUser.lastname}
            onChange={(event) => {
              setNewUser({
                ...newUser,
                lastname: event.target.value,
              });
            }}
          />
        </label>

        <label htmlFor="position">
          Position
          <input
            type="text"
            id="position"
            placeholder="Posititon"
            required
            value={newUser.position}
            onChange={(event) => {
              setNewUser({
                ...newUser,
                position: event.target.value,
              });
            }}
          />
        </label>

        <label htmlFor="phone">
          Phone
          <input
            type="text"
            id="phone"
            placeholder="Phone"
            required
            pattern="[0-9]{10}"
            value={newUser.phone}
            onChange={(event) => {
              setNewUser({
                ...newUser,
                phone: event.target.value,
              });
            }}
          />
        </label>

        <label htmlFor="login">
          Login
          <input
            type="text"
            id="login"
            placeholder="Login"
            required
            value={newUser.login}
            onChange={(event) => {
              setNewUser({
                ...newUser,
                login: event.target.value,
              });
            }}
          />
        </label>

        <label htmlFor="password1">
          Password
          <input
            type="password"
            id="password1"
            placeholder="Password"
            required
            value={password}
            onChange={(event) => {
              setPassword(event.target.value);
            }}
          />
        </label>

        <label htmlFor="password2">
          Repeat Password
          <input
            type="password"
            id="password2"
            placeholder="Repeat Password"
            required
            value={newUser.password}
            onChange={(event) => {
              setNewUser({
                ...newUser,
                password: event.target.value,
              });
            }}
          />
        </label>

        {password !== newUser.password ? 'Passwords are not equal' : ''}
        <button type="submit">Register</button>
      </form>
    </>
  );
}
