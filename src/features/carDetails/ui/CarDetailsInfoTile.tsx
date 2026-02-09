import styles from "./CarDetailsInfoTile.module.css";
const CarDetailsInfoTile = ({ icon, name, status }) => {
  return (
    <>
      <div className={styles.tile}>
        <div className={styles.tile__icon}>{icon}</div>{" "}
        <h4>
          <strong>{name}</strong>
        </h4>{" "}
        <h4>{status}</h4>
      </div>
    </>
  );
};

export default CarDetailsInfoTile;
