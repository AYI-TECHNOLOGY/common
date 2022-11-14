import Booking from "./Booking";
import Cleaner from "./Cleaner";
import User from "./User";

export type Payment = {
  price: number;
  id: string;
  currency: string;
  date: string;
  userId: string;
  user: User;
  cleanerId: string;
  bookingId: string;
  createdAt: string;
  updatedAt: string;
  booking: Booking;
  cleaner: Cleaner;
  stripeChargeId: string;
  tax: number;
  discount: number;
  finalPrice: number;
};

// export type Payment = {
//   price: number;
//   stripeChargeId: string;
//   tax: number;
//   finalPrice: number;
// };
