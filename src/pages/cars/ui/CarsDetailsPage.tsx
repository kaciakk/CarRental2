import { useParams } from "react-router";
import { getCar } from "../../../entities/car/api/carsApi";
import { useEffect, useState } from "react";
import type { Car } from "../../../entities/car/model/types";
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
  console.log(car);
  if (!car) return <div>Loading...</div>;
  return (
    <div style={{ display: "flex", flexDirection: "column" }}>
      <div>ID: {car.id}</div>
      <div>Marka: {car.brand}</div>
      <div>Model: {car.model}</div>
      <div>Kolor: {car.color}</div>
      <div>Silnik: {car.engine}</div>
      <div>Skrzynia: {car.gearbox}</div>
      <div>Segment: {car.segment}</div>
      <div>Cena / dzień: {car.dailyPrice} zł</div>
      <div>
        <img
          src={car.image}
          alt={`${car.brand} ${car.model}`}
          style={{ width: "300px", marginTop: "10px" }}
        />
      </div>
    </div>
  );
};

export default CarsDetails;
