import { useEffect, useState } from "react";
import { getCars } from "../../../entities/car/api/carsApi";
import type { Car } from "../../../entities/car/model/types";
import CarTile from "./CarTile";
const CarsList = () => {
  const [cars, setCars] = useState<Car[]>([]);

  useEffect(() => {
    async function loadCars() {
      const data = await getCars();
      setCars(data);
    }
    loadCars();
  }, []);
  console.log(cars);
  return (
    <div style={{ display: "flex", flexWrap: "wrap" }}>
      {cars.map((car) => {
        const { image, brand, model, dailyPrice } = car;
        return (
          <div style={{ padding: "5px" }}>
            <CarTile
              image={image}
              brand={brand}
              model={model}
              dailyPrice={dailyPrice}
            />{" "}
          </div>
        );
      })}
    </div>
  );
};

export default CarsList;
