import ENVIRONMENTS from "../constants/ENVIRONMENTS";
import dotenv from "dotenv";

dotenv.config()

export const checkIfDev = () =>
  ENVIRONMENTS.DEVELOPEMENT === process.env.NODE_ENV;

export const checkIfProd = () =>
  ENVIRONMENTS.PRODUCTION === process.env.NODE_ENV;
