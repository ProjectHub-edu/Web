import { useContext } from "react";
import { AuthContext } from "./AuthContext";

export const useAuthContext = () => {
  const { user, setUser } = useContext(AuthContext);

  return { user, setUser };
};
