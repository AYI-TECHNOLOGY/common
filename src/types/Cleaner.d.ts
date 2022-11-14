import { GENDER } from "../enums";
import { Address } from "./Address";
import Id from "./Id";

export type CleanerAttrs = {
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
  isEmailVerified?: boolean;
} & Address;

type Cleaner = CleanerAttrs & { id?: string };

export default Cleaner;
