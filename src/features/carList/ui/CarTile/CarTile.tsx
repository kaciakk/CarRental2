import Button from "../../../../shared/ui/Button/Button";
import styles from "./CarTile.module.css";

type CarTileProps = {
  image: string;
  brand: string;
  model: string;
  power: number;
  fuel: string;
  year: number;
  dailyPrice: string;
  onDetails: () => void;
  onBook: () => void;
};
const CarTile = ({
  image,
  brand,
  model,
  dailyPrice,
  onDetails,
  onBook,
  power,
  fuel,
  year,
}: CarTileProps) => {
  return (
    <>
      <div className={styles.tile} onClick={onDetails}>
        <div className={styles.tile__image}>
          <img src={image} />
        </div>
        <div className={styles.tile__description}>
          <h2>
            <strong>
              {brand} {model}
            </strong>
          </h2>
          <h4>
            {power}KM - {fuel}- {year}
          </h4>
          <h3>{dailyPrice}$</h3>
        </div>
        {/* <Button onClick={onDetails}>Details</Button>
        <Button onClick={onBook}>Book a Car</Button> */}
      </div>
    </>
  );
};

export default CarTile;
