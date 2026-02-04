import type { Car } from "../model/types";
const url = "http://localhost:3001/cars";

export async function getCars(): Promise<Car[]> {
  const response = await fetch(url);

  return await response.json();
}
