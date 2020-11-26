import './AllUsers.scss';
import 'bulma';
import { useEffect, useState } from 'react';

export const AllUsers = () => {
  const [usersFromLocal, setUsersFromLocal] = useState([]);

  useEffect(() => {
    let users = JSON.parse(localStorage.getItem("users"));
    setUsersFromLocal(users);
  }, []);

  return (
    <div className="allUsers">
      <section className="allUsers__section">
        {usersFromLocal.map((user) => (
          <div className="allUsers__card card" key={user.id}>
            <header className="card-header">
              <p className="card-header-title">
                {`${user.name} ${user.lastname}`}
              </p>
            </header>

            <div className="card-content">
              <p>{`Login: ${user.login} `}</p>
              <p>{`Password: ${user.password} `}</p>
              <p>{`Position: ${user.position} `}</p>
              <p>{`Phone: ${user.phone} `}</p>
              <div className="content">{`${user.registered}`}</div>
            </div>

            <footer className="card-footer">Footer</footer>
          </div>
        ))}
      </section>
    </div>
  );
}
