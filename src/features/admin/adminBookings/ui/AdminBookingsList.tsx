import { useEffect, useState } from "react";
import { getBookings } from "../../../../entities/booking/api/bookingsApi";

const AdminBookingsList = () => {
  const [bookings, setBookigns] = useState([]);

  useEffect(() => {
    async function loadBookings() {
      const response = await getBookings();

      setBookigns(response);
    }
    loadBookings();
  }, []);
  return (
    <div>
      {bookings.map((booking) => {
        return (
          <div>
            {booking.id} {booking.name} {booking.brand} {booking.model}
          </div>
        );
      })}
    </div>
  );
};

export default AdminBookingsList;
