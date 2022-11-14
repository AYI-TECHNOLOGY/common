import mongoose, { Schema } from "mongoose";
import BOOKING_STATUS from "../enums/BOOKING_STATUS.enum";
import Cleaner from "../types/Cleaner";
import Id from "../types/Id";
import { Payment } from "../types/Payment";
import User from "../types/User";
import { Address } from "../types/Address";
import GENDER from "../enums/GENDER.enum";

interface UserAttrs {
  firstName: string;
  lastName: string;
  email: string;
  image?: string;
  phone?: string;
  gender?: GENDER;
  account?: number;
  rating?: number;
  createdAt?: number;
  pushTokens: {
    expo?: Id[];
    [provider: string]: Id[];
  };
  bookings?: {
    requests: Id[];
    current: Id[];
  };
  updatedAt?: number;
  address?: string;
  city?: string;
  province?: string;
  country?: string;
  postalCode?: string;
}

interface UserDoc extends mongoose.Document, UserAttrs {}

interface UserModelInterface extends mongoose.Model<UserDoc> {
  build(attrs: UserAttrs): UserDoc;
}

const userSchema = new mongoose.Schema(
  {
    _id: Schema.Types.ObjectId,
    firstName: {
      type: String,
      required: true,
    },
    lastName: {
      type: String,
      required: true,
    },
    email: {
      type: String,
      required: true,
    },
    createdAt: {
      type: Date,
      required: true,
      default: Date.now,
    },
    image: {
      type: String,
    },
    phone: {
      type: String,
    },
    gender: {
      type: String,
    },
    pushTokens: Schema.Types.Mixed,
    updatedAt: {
      type: Date,
      required: true,
      default: Date.now,
    },
    address: {
      type: String,
    },
    city: {
      type: String,
    },
    province: {
      type: String,
    },
    country: {
      type: String,
    },
    postalCodes: {
      type: String,
    },
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

export { userSchema };
