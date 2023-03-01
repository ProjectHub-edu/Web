import axios from "axios"
import { User } from "../../../types/User";

export const login = async (email: string, password: string): Promise<User> => {
    const userData = await axios.post("/api/v1/user/login", {
        email,
        password,
    })
    return userData.data;
}

export const register = async (
  username: string,
  email: string,
  password: string
): Promise<User> => {
  const userData = await axios.post("/api/v1/user/new", {
    email,
    username,
    password,
  });

  return userData.data;
};