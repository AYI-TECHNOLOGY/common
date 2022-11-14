import BOOKING_STATUS from "../enums/BOOKING_STATUS.enum";
import { Address } from "./Address";
import Cleaner from "./Cleaner";
import Id from "./Id";
import { Payment } from "./Payment";
import User from "./User";

export type Booking = {
  userId?: Id;
  user?: User;
  id?: Id;
  cleanerId?: Id;
  cleaner?: Cleaner;
  date?: number;
  checkInTime?: number;
  checkOutTime?: number;
  comment?: string;
  rating?: number;
  buildingType?: string;
  roomNumber?: string;
  status?: BOOKING_STATUS;
  paymentId?: Id;
  payment?: Payment;
  nannyTierList?: {
    [tier: number]: string[];
  };
} & Address;

export default Booking;
