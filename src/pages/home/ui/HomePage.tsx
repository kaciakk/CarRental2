import { useNavigate } from "react-router-dom";
import Button from "../../../shared/ui/Button/Button";
import styles from "./HomePage.module.css";
const HomePage = () => {
  const navigate = useNavigate();
  return (
    <>
      <div className={styles.page}>
        <h1>More than a car. A driving experience. </h1>

        <Button
          style={{ width: "5rem", height: "3rem" }}
          onClick={() => navigate("/login")}
        >
          Login
        </Button>
      </div>
    </>
  );
};

export default HomePage;
