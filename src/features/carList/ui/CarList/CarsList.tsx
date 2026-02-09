import CarTile from "../CarTile/CarTile";
import { useNavigate } from "react-router";

import styles from "./CarList.module.css";

const CarsList = ({ cars }) => {
  const navigate = useNavigate();

  console.log(cars);
  function handleCarDetails(id: number) {
    navigate(`/cars/${id}`);
  }

  return (
    <>
      <div className={styles.list}>
        {cars.map((car) => {
          const { id, image, brand, model, dailyPrice, power, fuel, year } =
            car;
          return (
            <CarTile
              image={image}
              brand={brand}
              model={model}
              power={power}
              fuel={fuel}
              year={year}
              dailyPrice={dailyPrice}
              onDetails={() => handleCarDetails(id)}
            />
          );
        })}
      </div>
    </>
  );
};

export default CarsList;
