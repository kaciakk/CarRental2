import { useEffect, useState } from "react";
import { getCars } from "../../../entities/car/api/carsApi";
import type { Car } from "../../../entities/car/model/types";
import CarTile from "./CarTile";
import { useNavigate } from "react-router";

const CarsList = () => {
  const [cars, setCars] = useState<Car[]>([]);
  const navigate = useNavigate();
  useEffect(() => {
    async function loadCars() {
      const data = await getCars();
      setCars(data);
    }
    loadCars();
  }, []);

  function handleCarDetails(id: number) {
    console.log("Detale", id);
    navigate(`/cars/${id}`);
  }
  return (
    <div style={{ display: "flex", flexWrap: "wrap" }}>
      {cars.map((car) => {
        const { id, image, brand, model, dailyPrice } = car;
        return (
          <div style={{ padding: "5px" }}>
            <CarTile
              image={image}
              brand={brand}
              model={model}
              dailyPrice={dailyPrice}
              onDetails={() => handleCarDetails(id)}
            />
          </div>
        );
      })}
    </div>
  );
};

export default CarsList;
