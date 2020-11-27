export const usersBase = [
  {
    id: 1,
    isActive: false,
    name: "Petro",
    lastname: "Sheron",
    position: "Senion FE",
    phone: "+380678746534",
    registered: "26-May-2020",
    login: "pits",
    password: 1234,
  },
  {
    id: 2,
    isActive: false,
    name: "Mark",
    lastname: "Bool",
    position: "QA",
    phone: "+380673451278",
    registered: "17-Nov-2020",
    login: "marb",
    password: 3333,
  },
  {
    id: 3,
    isActive: false,
    name: "Topol",
    lastname: "Mars",
    position: "Analyst",
    phone: "+380673567849",
    registered: "05-Aug-2010",
    login: "mtop",
    password: 4321,
  },
];

export const date = () => {
  const d = new Date();

  const ye = new Intl.DateTimeFormat("en", { year: "numeric" })
    .format(d);
  
  const mo = new Intl.DateTimeFormat("en", { month: "short" })
    .format(d);
  
  const da = new Intl.DateTimeFormat("en", { day: "2-digit" })
    .format(d);

  return `${da}-${mo}-${ye}`;
}

export const initialText =
  "To abbreviate letters and number selection, there are predefined characters. They are also preceded by a backslash to distinguish them from a normal character.";
