import Card from "../../UI/Card/Card";
import styles from "./UserCard.module.css";

const UserCard = (props) => {
  return (
    <Card
      className={styles.cardStyle}
    >{`${props.firstName} ${props.lastName} ${props.birthdate}`}</Card>
  );
};

export default UserCard;
