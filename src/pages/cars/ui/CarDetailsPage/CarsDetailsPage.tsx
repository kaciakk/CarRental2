import { useParams } from "react-router";
import { getCar } from "../../../../entities/car/api/carsApi";
import { useEffect, useState } from "react";
import type { Car } from "../../../../entities/car/model/types";
import styles from "./CarDetailsPage.module.css";

import CarDetailsImage from "../../../../features/carDetails/ui/CarDetailsImage";
import { CarDetailsDescription } from "../../../../features/carDetails/ui/CarDetailsDescription";
import CarDetailsInfo from "../../../../features/carDetails/ui/CarDetailsInfo";
const CarsDetails = () => {
  const [car, setCar] = useState<Car | null>(null);
  const { id } = useParams();

  useEffect(() => {
    async function loadCar() {
      const data = await getCar(Number(id));
      setCar(data);
    }
    loadCar();
  }, [id]);

  if (!car) return <div>Loading...</div>;
  return (
    <>
      <div className={styles.card}>
        <div className={styles.card__left}>
          <CarDetailsImage
            image={car.image}
            brand={car.brand}
            model={car.model}
          />
          <CarDetailsInfo
            fuel={car.fuel}
            gearbox={car.gearbox}
            segment={car.segment}
            engine={car.engine}
            power={car.power}
          />
        </div>
        <div>
          <CarDetailsDescription
            brand={car.brand}
            model={car.model}
            year={car.year}
            dailyPrice={car.dailyPrice}
          />
        </div>
      </div>
    </>
  );
};

export default CarsDetails;
