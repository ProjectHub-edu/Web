import { createContext } from "react";
import { User } from "../../../types/User";

export interface AuthContextProps {
  user: User | null;
  setUser: (user: User) => void;
}

export const AuthContext = createContext<AuthContextProps>({
    user: null,
    setUser: () => {},
});

