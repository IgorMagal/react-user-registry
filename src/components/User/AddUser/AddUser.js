import { Fragment, useRef, useState } from "react";
import AlertModal from "../../UI/AlertModal/AlertModal";
import Button from "../../UI/Button/Button";
import styles from "./AddUser.module.css";

const AddUser = (props) => {
  const firstNameRef = useRef();
  const lastNameRef = useRef();
  const dateRef = useRef();

  const [error, setErrorMsg] = useState();

  const clearForm = () => {
    firstNameRef.current.value = "";
    lastNameRef.current.value = "";
    dateRef.current.value = "";
  };

  const submitHandler = (event) => {
    const enteredFirstName = firstNameRef.current.value;
    const enteredLastName = lastNameRef.current.value;
    const enteredDate = dateRef.current.value;

    event.preventDefault();
    if (
      enteredFirstName.toString().trim().length === 0 ||
      enteredLastName.toString().trim().length === 0 ||
      enteredDate.toString().trim().length === 0
    ) {
      setErrorMsg({
        title: "Invalid input",
        message: "Please enter a valid value in all fields.",
      });
      return;
    }
    props.onNewUserAdded({
      firstName: enteredFirstName,
      lastName: enteredLastName,
      birthdate: enteredDate,
    });
    clearForm();
  };

  const errorHandler = () => {
    setErrorMsg(null);
  };

  return (
    <Fragment>
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
              <input type="text" ref={firstNameRef}></input>
            </div>
            <div className={styles.addUserControl}>
              <label>Last name</label>
              <input type="text" ref={lastNameRef}></input>
            </div>
            <div className={styles.addUserControl}>
              <label>Date of birth</label>
              <input type="date" ref={dateRef}></input>
            </div>
          </div>
          <div className={styles.addUserActions}>
            <Button type="submit">Add User</Button>
          </div>
        </form>
      </div>
    </Fragment>
  );
};

export default AddUser;
