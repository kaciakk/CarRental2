const url: string = "http://localhost:3001/bookings";
export async function getBookings() {
  const response = await fetch(url);
  const data = await response.json();
  return data;
}

export async function createBooking(newBooking) {
  const response = await fetch(url, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(newBooking),
  });
  if (!response) {
    throw console.error("Error Adding booking");
  }
}
