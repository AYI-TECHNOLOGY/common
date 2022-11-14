import dotenv from "dotenv";
import ENVIRONMENTS from "./ENVIRONMENTS";

dotenv.config();

export const PORT = "3001";

export const baseUrl = ENVIRONMENTS.DEVELOPEMENT
  ? `http://localhost:`
  : "";
