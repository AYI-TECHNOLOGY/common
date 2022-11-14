import {GENDER} from "../enums";
import { Address } from "./Address";
import Id from "./Id";

export type UserAttrs = {
  firstName?: string;
  lastName?: string;
  email?: string;
  image?: string;
  phone?: string;
  gender?: GENDER;
  account?: number;
  rating?: number;
  ratingNumber?: number;
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
  isEmailVerified: boolean;
} & Address;

type User = UserAttrs & { id?: string };

export default User;
