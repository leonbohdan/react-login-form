import './UserPage.scss';
import 'bulma';
import { useState } from 'react';
import CN from 'classnames';
import { EditForm } from '../EditForm/EditForm';
import { AllUsers } from '../AllUsers/AllUsers';
import { TextField } from '../TextField/TextField';

export const UserPage = ({ choosenUser }) => {
  const initialTabs = [
    {
      id: 1,
      title: "Change user information",
      content: <EditForm choosenUser={choosenUser} />,
    },
    {
      id: 2,
      title: "Show all users",
      content: <AllUsers />,
    },
    {
      id: 3,
      title: "Add text",
      content: <TextField />,
    },
  ];

  const [tabs, setTabs] = useState(initialTabs);
  const [id, setId] = useState(0);

  return (
    <>
      <section className="userPage">
        <h1 className="userPage__heading">UserPage</h1>

        <div className="userPage__buttons tabs is-centered">
          <ul className="userPage__list">
            {tabs.map((tab, i) => (
              <li
                type="button"
                key={tab.id}
                className={CN("userPage__button", {
                  "is-active": tab.id === id + 1,
                })}
                onClick={() => {
                  setId(i);
                }}
              >
                <a className="userPage__name" href=" #">{tab.title}</a>
              </li>
            ))}
          </ul>
        </div>

        <article className="userPage__message">{tabs[id].content}</article>
      </section>
    </>
  );
};
