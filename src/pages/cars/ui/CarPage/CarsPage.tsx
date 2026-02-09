import { useState, useEffect } from "react";
import CarsList from "../../../../features/carList/ui/CarList/CarsList";
import type { Car } from "../../../../entities/car/model/types";
import { getCar, getCars } from "../../../../entities/car/api/carsApi";
import { createBooking } from "../../../../entities/booking/api/bookingsApi";
import styles from "./CarPage.module.css";
import Input from "../../../../shared/ui/Input/Input";
const CarsPage = () => {
  const [cars, setCars] = useState<Car[]>([]);
  const [search, setSearch] = useState("");
  useEffect(() => {
    async function loadCars() {
      const data = await getCars();
      setCars(data);
    }
    loadCars();
  }, []);

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

  const filteredCars = cars.filter((car) => {
    return car.brand.toLowerCase().includes(search.toLowerCase());
  });

  return (
    <div className={styles.page}>
      <section className={styles.filter}>
        <Input
          placeholder={"search"}
          value={search}
          onChange={(e) => {
            setSearch(e.target.value);
          }}
        />
      </section>
      <section className={styles.list}>
        <CarsList cars={filteredCars} />
      </section>
    </div>
  );
};

export default CarsPage;
