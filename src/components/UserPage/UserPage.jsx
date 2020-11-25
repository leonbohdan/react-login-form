import './UserPage.scss';
import 'bulma';
import { useEffect, useState } from 'react';
import CN from 'classnames';
import { initialTabs } from '../../store/initialState';


export const UserPage = () => {
  const [tabs, setTabs] = useState(initialTabs);
  const [id, setId] = useState(0);

  console.log(tabs);

  return (
    <>
      <h1>UserPage</h1>
      {/* <div className="tabs">
        <ul>
          <li className="is-active">
            <a>Change user information</a>
          </li>
          <li>
            <a>Show all users</a>
          </li>
          <li>
            <a>Add text</a>
          </li>
        </ul>
      </div> */}

      <section className="section">
        <div className="section__buttons">
          {tabs.map((tab, i) => (
            <button
              type="button"
              key={tab.id}
              className={CN("section__button", {
                "section__button--tab": tab.id === i,
              })}
              onClick={() => {
                setId(i);
              }}
            >
              {tab.title}
            </button>
          ))}
        </div>

        <article className="section__message">
          {tabs[id].content}
        </article>
      </section>
    </>
  );
};
