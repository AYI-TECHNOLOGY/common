import { baseUrl } from "../../constants/URLS";
import { checkIfDev } from "../../helpers/environment";

const bookingsServiceRoutes = {
  bookings: {
    cleaner: {
      getCleanerBookings: (userId: string) =>
        `${root}/bookings/cleaner/${userId}`,
    },
    user: {
      getUserBookings: (userId: string) => `${root}/bookings/user/${userId}`,
    },
    bookingsManagement: {
      getBooking: (id: string) => `${root}/bookings/${id}`,
      acceptBooking: (id: string) => `${root}/bookings/${id}/accept`,
      checkIn: (id: string) => `${root}/bookings/${id}/check-in`,
      checkOut: (id: string) => `${root}/bookings/${id}/check-out`,
    },
  },
  distribute: {
    distributeBooking: {
      distributeBooking: (id) => `${root}/distribute/${id}`
    }
  }
};

export const PORT = 3002;

const root = checkIfDev() ? `${baseUrl}${PORT}` : `${baseUrl}/bookings`;

export default bookingsServiceRoutes;
