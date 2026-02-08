import styles from "./Button.module.css";
type ButtonProps = {
  onClick: () => void;
  style?: React.CSSProperties;
  children: React.ReactNode;
};
const Button = ({ onClick, style, children }: ButtonProps) => {
  return (
    <>
      <button className={styles.button} style={style} onClick={onClick}>
        {children}
      </button>
    </>
  );
};

export default Button;
