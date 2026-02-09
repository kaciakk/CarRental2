import styles from "./Input.module.css";
import { LuSearch } from "react-icons/lu";
const Input = ({ placeholder, value, onChange }) => {
  return (
    <div className={styles.filters}>
      <input
        className={styles.input}
        placeholder={placeholder}
        value={value}
        onChange={onChange}
      />
      <div className={styles.icon}>
        <LuSearch />
      </div>
    </div>
  );
};

export default Input;
