import mongoose, { Schema } from "mongoose";
import BOOKING_STATUS from "../enums/BOOKING_STATUS.enum";
import Cleaner from "../types/Cleaner";
import Id from "../types/Id";
import { Payment } from "../types/Payment";
import User from "../types/User";

interface BookingAttrs {
  userId?: Id;
  user?: User;
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
  address?: string;
  city?: string;
  province?: string;
  country?: string;
  postalCode?: string;
}

export interface BookingDoc extends mongoose.Document, BookingAttrs {}

interface BookingModelInterface extends mongoose.Model<BookingDoc> {
  build(attrs: BookingAttrs): BookingDoc;
}

const bookingSchema = new mongoose.Schema(
  {
    date: {
      type: Date,
      required: true,
      default: Date.now,
    },
    checkInTime: {
      type: Date,
    },
    checkOutTime: {
      type: Date,
    },
    comment: {
      type: String,
    },
    rating: {
      type: Number,
    },
    buildingType: {
      type: String,
    },
    roomNumber: {
      type: String,
    },
    status: {
      type: String,
      required: true,
      default: BOOKING_STATUS.unassigned,
    },
    address: {
      type: String,
      required: true,
    },
    city: {
      type: String,
      required: true,
    },
    postalCode: {
      type: String,
      required: true,
    },
    province: {
      type: String,
      required: true,
    },
    country: {
      type: String,
      required: true,
      default: "Canada",
    },
    nannyTierList: Schema.Types.Mixed,
  },
  {
    toJSON: {
      transform(doc, ret) {
        ret.id = ret._id;
        delete ret._id;
      },
    },
  }
);

const createBookingModel = () => {
  bookingSchema.statics.build = (attrs: BookingAttrs) => {
    return new BookingModel({ ...attrs });
  };
  const BookingModel = mongoose.model<BookingDoc, BookingModelInterface>(
    "Booking",
    bookingSchema
  );
  return BookingModel;
};

export { createBookingModel, bookingSchema };
