import { useEffect, useState } from "react";
import {
  addCar,
  deleteCar,
  editCar,
  getCars,
} from "../../../../entities/car/api/carsApi";
import type { Car } from "../../../../entities/car/model/types";
import AdminCarTile from "./AdminCarTile";

const AdminCarList = () => {
  const [cars, setCars] = useState<Car[]>([]);
  const [editingCarId, setEditingCarId] = useState<number>(null);
  const [form, setForm] = useState({
    brand: "",
    model: "",
    color: "",
    engine: "",
    gearbox: "",
    dailyPrice: "",
    segment: "",
    image: "https://images.unsplash.com/photo-1617814076367-b759c7d7e738",
  });
  const [editForm, setEditForm] = useState<Partial<Car>>({});
  useEffect(() => {
    async function loadCars() {
      const data = await getCars();
      setCars(data);
    }
    loadCars();
  }, []);

  function handleEditChange(e: React.ChangeEvent<HTMLInputElement>) {
    setEditForm((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  }

  async function handleDeleteCar(id: number) {
    await deleteCar(id);
    const newCars = cars.filter((car) => {
      return car.id !== id;
    });
    setCars(newCars);
  }
  async function addNewCar() {
    const createdCar = await addCar(form);
    setCars((prev) => [...prev, createdCar]);
  }
  async function handleSubmitEditingCar(e: React.SyntheticEvent) {
    e.preventDefault();
    const editedCar = editForm;
    await editCar(editingCarId, editedCar);

    const newCars = cars.map((car) => {
      if (car.id === editingCarId) {
        return editedCar;
      } else return car;
    });
    setCars(newCars);
  }
  function handleEditCar(id: number) {
    setEditingCarId(id);
    const editingCar = cars.find((car) => car.id === id);

    if (!editingCar) return;
    setEditForm(editingCar);
  }

  function handleAddNewCar(e: React.SyntheticEvent) {
    e.preventDefault();
    addNewCar();
  }
  function handleChange(e: React.ChangeEvent<HTMLInputElement>) {
    setForm({ ...form, [e.target.name]: e.target.value });
  }
  return (
    <div style={{ display: "flex", flexDirection: "column", gap: "8px" }}>
      <form
        onSubmit={handleAddNewCar}
        style={{ display: "flex", flexDirection: "column", gap: "4px" }}
      >
        <button type="submit">Add New Car</button>

        <input
          name="brand"
          placeholder="brand"
          value={form.brand}
          onChange={handleChange}
        />
        <input
          name="model"
          placeholder="model"
          value={form.model}
          onChange={handleChange}
        />
        <input
          name="color"
          placeholder="color"
          value={form.color}
          onChange={handleChange}
        />
        <input
          name="engine"
          placeholder="engine"
          value={form.engine}
          onChange={handleChange}
        />
        <input
          name="gearbox"
          placeholder="gearbox"
          value={form.gearbox}
          onChange={handleChange}
        />
        <input
          name="dailyPrice"
          placeholder="price"
          value={form.dailyPrice}
          onChange={handleChange}
        />
        <input
          name="segment"
          placeholder="segment"
          value={form.segment}
          onChange={handleChange}
        />
        <input
          name="image"
          placeholder="image"
          value={form.image}
          onChange={handleChange}
        />
      </form>

      <form
        onSubmit={handleSubmitEditingCar}
        style={{ display: "flex", flexDirection: "column", gap: "4px" }}
      >
        <button type="submit">Accept Editing</button>

        <input
          name="brand"
          placeholder="brand"
          value={editForm.brand}
          onChange={handleEditChange}
        />
        <input
          name="model"
          placeholder="model"
          value={editForm.model}
          onChange={handleEditChange}
        />
        <input
          name="color"
          placeholder="color"
          value={editForm.color}
          onChange={handleEditChange}
        />
        <input
          name="engine"
          placeholder="engine"
          value={editForm.engine}
          onChange={handleEditChange}
        />
        <input
          name="gearbox"
          placeholder="gearbox"
          value={editForm.gearbox}
          onChange={handleEditChange}
        />
        <input
          name="dailyPrice"
          placeholder="price"
          value={editForm.dailyPrice}
          onChange={handleEditChange}
        />
        <input
          name="segment"
          placeholder="segment"
          value={editForm.segment}
          onChange={handleEditChange}
        />
        <input
          name="image"
          placeholder="image"
          value={editForm.image}
          onChange={handleEditChange}
        />
      </form>

      {cars.map((car) => {
        const {
          id,
          brand,
          model,
          color,
          engine,
          gearbox,
          dailyPrice,
          segment,
          image,
        } = car;
        return (
          <AdminCarTile
            id={id}
            brand={brand}
            model={model}
            color={color}
            engine={engine}
            gearbox={gearbox}
            dailyPrice={dailyPrice}
            segment={segment}
            image={image}
            onDelete={() => handleDeleteCar(id)}
            onEdit={() => handleEditCar(id)}
          />
        );
      })}
    </div>
  );
};

export default AdminCarList;
