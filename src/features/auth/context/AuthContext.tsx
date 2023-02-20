import { createContext, useState } from "react";
import { User } from "../../../types/User";

export interface AuthContextProps {
  user: User | null;
  setUser: (user: User) => void;
}

export const AuthContext = createContext<AuthContextProps>({
    user: null,
    setUser: () => {},
});


export const AuthProvider = ({ children }: { children: React.ReactNode }) => {
  const [user, setUser] = useState<User | null>(null);

  return (
    <AuthContext.Provider value={{ user, setUser }}>
      {children}
    </AuthContext.Provider>
  );
};
