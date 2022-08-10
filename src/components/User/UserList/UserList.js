import UserCard from "../UserCard/UserCard";
import Card from "../../UI/Card/Card";
import styles from "./UserList.module.css";

const UserList = (props) => {
  return (
    <div className={styles.userList}>
      {props.registeredUsers.map((user) => (
        <UserCard
          key={user.firstName + user.lastName}
          firstName={user.firstName}
          lastName={user.lastName}
          birthdate={user.birthdate}
        />
      ))}
    </div>
  );
};

export default UserList;
