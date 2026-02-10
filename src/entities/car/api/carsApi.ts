import type { Car } from "../model/carTypes";

const url: string = "http://localhost:3001/cars";

export async function getCars(): Promise<Car[]> {
  const response = await fetch(url);

  return await response.json();
}

export async function getCar(id: number): Promise<Car> {
  const response = await fetch(`${url}/${id}`);

  return await response.json();
}

export async function deleteCar(id: number): Promise<void> {
  const response = await fetch(`${url}/${id}`, { method: "DELETE" });
  if (!response.ok) throw new Error("Failed to delete car");
}

export async function addCar(newCar: Car): Promise<Car> {
  const response = await fetch(url, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(newCar),
  });

  if (!response.ok) {
    throw new Error("Failed to add car");
  }

  return response.json();
}

export async function editCar(
  id: number,
  editedCar: Partial<Car>,
): Promise<Car> {
  const response = await fetch(`${url}/${id}`, {
    method: "PATCH",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(editedCar),
  });

  if (!response.ok) throw new Error("Failed to edit car");
  return response.json();
}
