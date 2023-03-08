import axios from "axios";
import { User } from "../../../types/User";

export const login = (email: string, password: string): Promise<User> => {
  return axios.post("/api/v1/user/login", {
    email,
    password,
  });
};

export const register = (
  username: string,
  email: string,
  password: string
): Promise<User> => {
  return axios.post("/api/v1/user/new", {
    email,
    username,
    password,
  });
};
