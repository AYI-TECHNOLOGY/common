import mongoose, { Schema } from "mongoose";
import BOOKING_STATUS from "../enums/BOOKING_STATUS.enum";
import Cleaner from "../types/Cleaner";
import { Payment } from "../types/Payment";
import User from "../types/User";
import { Address } from "../types/Address";
import GENDER from "../enums/GENDER.enum";
import { Id } from "../types";

interface CleanerAttrs {
  firstName: string;
  lastName: string;
  email: string;
  image?: string;
  phone?: string;
  gender?: GENDER;
  account?: number;
  rating?: number;
  ratingNumber?: number;
  createdAt?: number;
  pushTokens?: {
    expo?: Id[];
    [provider: string]: Id[];
  };
  bookings?: {
    requests: Id[];
    current: Id[];
  };
  updatedAt?: number;
  balance?: number;
}

interface CleanerDoc extends mongoose.Document, CleanerAttrs {}

interface CleanerModelInterface extends mongoose.Model<CleanerDoc> {
  build(attrs: CleanerAttrs): CleanerDoc;
}

const cleanerSchema = new mongoose.Schema(
  {
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
    image: {
      type: String,
    },
    phone: {
      type: String,
    },
    gender: {
      type: String,
    },
    account: {
      type: Number,
      default: 0,
    },
    balance: {
      type: Number,
      default: 0,
    },
    ratings: {
      rating: {
        type: Number,
        default: 0,
      },
      ratingNumber: {
        type: Number,
        default: 0,
      },
    },
    pushTokens: Schema.Types.Mixed,
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
    createdAt: {
      type: Date,
      required: true,
      default: Date.now,
    },
    updatedAt: {
      type: Date,
      required: true,
      default: Date.now,
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


export { cleanerSchema };
