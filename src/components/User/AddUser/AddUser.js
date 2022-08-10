import { useState } from "react";
import AlertModal from "../../UI/AlertModal/AlertModal";
import Button from "../../UI/Button/Button";
import styles from "./AddUser.module.css";

const AddUser = (props) => {
  const [userInput, setUserInput] = useState({
    firstName: "",
    lastName: "",
    birthdate: "",
  });

  const [error, setErrorMsg] = useState();

  const clearForm = (props) => {
    setUserInput(() => {
      return {
        firstName: "",
        lastName: "",
        birthdate: "",
      };
    });
  };

  const firstNameHandler = (event) => {
    setUserInput((oldValues) => {
      return { ...oldValues, firstName: event.target.value };
    });
  };
  const lastNameHandler = (event) => {
    setUserInput((oldValues) => {
      return { ...oldValues, lastName: event.target.value };
    });
  };
  const birthdateHandler = (event) => {
    setUserInput((oldValues) => {
      return { ...oldValues, birthdate: event.target.value };
    });
  };

  const submitHandler = (event) => {
    event.preventDefault();
    if (
      userInput.firstName.trim.length === 0 ||
      userInput.lastName.trim.length === 0 ||
      userInput.birthdate.trim.length === 0
    ) {
      setErrorMsg({
        title: "Invalid input",
        message: "Please enter a valid value in all fields.",
      });
      return;
    }
    props.onNewUserAdded(userInput);
    clearForm();
  };

  const errorHandler = () => {
    setErrorMsg(null);
  };

  return (
    <div>
      {error && (
        <AlertModal
          title={error.title}
          message={error.message}
          onConfirm={errorHandler}
        />
      )}
      <div className={styles.addUser}>
        <form onSubmit={submitHandler}>
          <div className={styles.addUserControls}>
            <div className={styles.addUserControl}>
              <label>First name</label>
              <input
                type="text"
                value={userInput.firstName}
                onChange={firstNameHandler}
              ></input>
            </div>
            <div className={styles.addUserControl}>
              <label>Last name</label>
              <input
                type="text"
                value={userInput.lastName}
                onChange={lastNameHandler}
              ></input>
            </div>
            <div className={styles.addUserControl}>
              <label>Date of birth</label>
              <input
                type="date"
                value={userInput.birthdate}
                onChange={birthdateHandler}
              ></input>
            </div>
          </div>
          <div className={styles.addUserActions}>
            <Button type="submit">Add User</Button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default AddUser;
