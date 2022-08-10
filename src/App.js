import styles from "./App.module.css";
import AddUser from "./components/User/AddUser/AddUser";
import { useState } from "react";
import UserList from "./components/User/UserList/UserList";

const App = (props) => {
  const [registeredUsers, addUserRegistry] = useState([
    {
      firstName: "Igor",
      lastName: "Magal",
      birthdate: "15-Dic",
      id: "Igor",
    },
  ]);

  const addUserHandler = (enteredUser) => {
    addUserRegistry((previousUsers) => {
      return [...previousUsers, { ...enteredUser, id: enteredUser.firstName }];
    });
    console.log(registeredUsers);
  };

  return (
    <div className={styles.body}>
      <AddUser onNewUserAdded={addUserHandler} />
      <UserList registeredUsers={registeredUsers} />
    </div>
  );
};

export default App;
