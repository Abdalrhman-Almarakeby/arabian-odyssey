import { User } from "@/types/user";
import { useState, createContext, useContext } from "react";

type UserContextProps = {
  children: React.ReactNode;
};

type UserContext = {
  user: User | null;
  setUser: React.Dispatch<React.SetStateAction<User | null>>;
};

const UserContext = createContext<UserContext | null>(null);

export function useUser() {
  const context = useContext(UserContext);
  if (!context) throw new Error("useUser must be used within a UserContextProvider");

  return context;
}

export function UserContextProvider({ children }: UserContextProps) {
  const [user, setUser] = useState<User | null>(null);

  return <UserContext.Provider value={{ user, setUser }}>{children}</UserContext.Provider>;
}
