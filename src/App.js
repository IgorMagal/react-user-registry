import styles from "./App.module.css";
import AddUser from "./components/User/AddUser/AddUser";
import { Fragment, useState } from "react";
import UserList from "./components/User/UserList/UserList";

const App = (props) => {
  const [registeredUsers, addUserRegistry] = useState([]);

  const addUserHandler = (enteredUser) => {
    addUserRegistry((previousUsers) => {
      return [...previousUsers, { ...enteredUser, id: enteredUser.firstName }];
    });
    console.log(registeredUsers);
  };

  return (
    <Fragment className={styles.body}>
      <AddUser onNewUserAdded={addUserHandler} />
      <UserList registeredUsers={registeredUsers} />
    </Fragment>
  );
};

export default App;
