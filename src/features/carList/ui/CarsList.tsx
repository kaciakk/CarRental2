import { useEffect, useState } from "react";
import { getCars, getCar } from "../../../entities/car/api/carsApi";
import type { Car } from "../../../entities/car/model/types";
import CarTile from "./CarTile";
import { useNavigate } from "react-router";
import { createBooking } from "../../../entities/booking/api/bookingsApi";
import { getUsers } from "../../../entities/user/api/usersApi";

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
  async function handleBookCar(id) {
    const loadCar = await getCar(id);
    const loadUsers = await getUsers();
    const loggedUserId = localStorage.getItem("currentUserId");

    const loadUser = loadUsers.find((user) => {
      return user.id === loggedUserId;
    });
    if (!loadUser) {
      console.log("zaloguj się");
    }
    await createBooking({ ...loadCar, ...loadUser });
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
              onBook={() => {
                handleBookCar(id);
              }}
            />
          </div>
        );
      })}
    </div>
  );
};

export default CarsList;
