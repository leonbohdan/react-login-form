import { EditForm } from '../components/EditForm/EditForm';
import { AllUsers } from '../components/AllUsers/AllUsers';
import { TextField } from '../components/TextField/TextField';

export const usersBase = [
  {
    id: 1,
    isActive: false,
    name: "Petro",
    lastname: "Sheron",
    position: "Senion FE",
    phone: 2233445566,
    registered: "2020-05-30T11:39:51 -03:00",
    login: "pits",
    password: 1234,
  },
  {
    id: 2,
    isActive: false,
    name: "Mark",
    lastname: "Bool",
    position: "QA",
    phone: 2255663344,
    registered: "2020-01-30T11:00:51 -03:00",
    login: "marb",
    password: 3333,
  },
  {
    id: 3,
    isActive: false,
    name: "Topol",
    lastname: "Mars",
    position: "Analyst",
    phone: 4422663355,
    registered: "2020-04-30T13:40:51 -03:00",
    login: "mtop",
    password: 4321,
  }
];

// export const initialTabs = [
//   {
//     id: 1,
//     title: "Change user information",
//     content: <EditForm choosenUser={choosenUser} />,
//   },
//   {
//     id: 2,
//     title: "Show all users",
//     content: <AllUsers />,
//   },
//   {
//     id: 3,
//     title: "Add text",
//     content: <TextField />,
//   },
// ];
