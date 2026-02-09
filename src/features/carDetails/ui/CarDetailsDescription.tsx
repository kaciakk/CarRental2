import Button from "../../../shared/ui/Button/Button";
import styles from "./CarDetailsDescription.module.css";
export const CarDetailsDescription = ({ brand, model, year, dailyPrice }) => {
  return (
    <>
      <div className={styles.card__description}>
        <div>
          <h2>
            {brand} {model}
          </h2>
          <h4> {year}</h4>
          <h3> {dailyPrice}</h3>
        </div>
        <div className={styles.card__description_controls}>
          <Button>Book</Button>
        </div>
      </div>
    </>
  );
};
