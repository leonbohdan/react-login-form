import './EditForm';
import 'bulma';
import { useEffect, useState } from 'react';

export const EditForm = ({ choosenUser }) => {
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

  const [choosenMember, setChoosenMember] = useState(
    localState.find((user) => user.login === choosenUser),
  );

  console.log(choosenMember);
  console.log(localState);

  const handleSubmit = (event) => {
    event.preventDefault();

    setLocalState([
      ...localState,
      newUser,
    ]);
  };

  useEffect(() => {
    localStorage.setItem("users", JSON.stringify(localState));
  }, [localState]);

  return (
    <>
      <h1>Edit Form</h1>
      <h2>Here you can edit your information</h2>

      <form onSubmit={handleSubmit}>
        <label htmlFor="name">
          Name
          <input
            type="text"
            id="name"
            placeholder="Name"
            required
            value={choosenMember.name}
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
            value={choosenMember.lastname}
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
            value={choosenMember.position}
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
            pattern="[0-9]{3}"
            value={choosenMember.phone}
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
            value={choosenMember.login}
            onChange={(event) => {
              setNewUser({
                ...newUser,
                login: event.target.value,
              });
            }}
          />
        </label>

        <label htmlFor="password1">
          New Password
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
          Repeat New Password
          <input
            type="password"
            id="password2"
            placeholder="Repeat Password"
            required
            value={choosenMember.password}
            onChange={(event) => {
              setNewUser({
                ...newUser,
                password: event.target.value,
              });
            }}
          />
        </label>

        {password !== choosenMember.password ? "Passwords are not equal" : ""}
        <button type="submit">Register</button>
      </form>
    </>
  );
};