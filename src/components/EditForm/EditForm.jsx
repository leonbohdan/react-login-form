import './EditForm.scss';
import 'bulma';
import { useEffect, useState } from 'react';

export const EditForm = ({ choosenUser }) => {
  const [password, setPassword] = useState('');
  const [localState, setLocalState] = useState(
    JSON.parse(localStorage.getItem('users')) || ''
  );

  const [choosenMember, setChoosenMember] = useState(
    localState.find((user) => user.id === choosenUser),
  );

  const handleSubmit = (event) => {
    event.preventDefault();

    setLocalState([
      ...localState.filter(user => (
        user.id !== choosenUser
      )),
      choosenMember,
    ]);
  };

  useEffect(() => {
    localStorage.setItem("users", JSON.stringify(localState));
  }, [localState]);

  return (
    <div className="edit">
      <h1 className="edit__heading">Edit Form</h1>
      <h2 className="edit__description">
        Here you can edit your information
      </h2>

      <form
        className="edit__form form"
        onSubmit={handleSubmit}
      >
        <label
          htmlFor="name control"
          className="edit__label label"
        >
          Name
          <input
            type="text"
            id="name"
            placeholder="Name"
            pattern="[A-Za-z]{3,12}"
            title="Name must be between 3 and 12 characters in length and contain only letters"
            required
            className="edit__input input"
            value={choosenMember.name}
            onChange={(event) => {
              setChoosenMember({
                ...choosenMember,
                name: event.target.value,
              });
            }}
          />
        </label>

        <label
          htmlFor="lastname"
          className="edit__label label"
        >
          Lastname
          <input
            type="text"
            id="lastname"
            placeholder="Lastname"
            pattern="[A-Za-z]{3,12}"
            title="Lastname must be between 3 and 12 characters in length and contain only letters"
            required
            className="edit__input input"
            value={choosenMember.lastname}
            onChange={(event) => {
              setChoosenMember({
                ...choosenMember,
                lastname: event.target.value,
              });
            }}
          />
        </label>

        <label
          htmlFor="position"
          className="edit__label label"
        >
          Position
          <input
            type="text"
            id="position"
            placeholder="Posititon"
            pattern="[A-Za-z0-9\s]{6,20}"
            title="Position must be between 6 and 20 characters in length and contain only letters and numbers"
            required
            className="edit__input input"
            value={choosenMember.position}
            onChange={(event) => {
              setChoosenMember({
                ...choosenMember,
                position: event.target.value,
              });
            }}
          />
        </label>

        <label
          htmlFor="phone"
          className="edit__label label"
        >
          Phone
          <input
            type="tel"
            id="phone"
            placeholder="Phone"
            pattern="[+]{1}[0-9]{12,20}"
            title="Number must start with (+) and contain 12-20 numbers"
            required
            className="edit__input input"
            value={choosenMember.phone}
            onChange={(event) => {
              setChoosenMember({
                ...choosenMember,
                phone: event.target.value,
              });
            }}
          />
        </label>

        <label
          htmlFor="login"
          className="edit__label label"
        >
          Login
          <input
            type="text"
            id="login"
            placeholder="Login"
            pattern="[A-Za-z0-9]{4,12}"
            title="Login must be between 4 and 12 characters in length and contain only letters and numbers"
            required
            className="edit__input input"
            value={choosenMember.login}
            onChange={(event) => {
              setChoosenMember({
                ...choosenMember,
                login: event.target.value,
              });
            }}
          />
        </label>

        <label
          htmlFor="password1"
          className="edit__label label"
        >
          New Password
          <input
            type="password"
            id="password1"
            placeholder="Password"
            pattern="[\d]{4,16}"
            title="Password must be between 4 and 16 characters in length and contain only numbers"
            required
            className="edit__input input"
            value={password}
            onChange={(event) => {
              setPassword(event.target.value);
            }}
          />
        </label>

        <label
          htmlFor="password2"
          className="edit__label label"
        >
          Repeat New Password
          <input
            type="password"
            id="password2"
            placeholder="Repeat Password"
            pattern="[\d]{4,16}"
            title="Password must be between 4 and 16 characters in length and contain only numbers"
            required
            className="edit__input input"
            value={choosenMember.password}
            onChange={(event) => {
              setChoosenMember({
                ...choosenMember,
                password: event.target.value,
              });
            }}
          />
        </label>

        {password !== choosenMember.password ?
          <span
            className="edit__wrongPass"
          >
            Passwords are not equal
          </span>
          : ""}

        <button
          type="submit"
          className="edit__button button is-primary"
        >
          Save changes
        </button>
      </form>
    </div>
  );
};