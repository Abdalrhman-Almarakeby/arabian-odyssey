import { useState, createContext, useContext } from "react";

type UserContextProps = {
  children: React.ReactNode;
};

type UserContext = {
  user: string;
  setUser: React.Dispatch<React.SetStateAction<string>>;
};

const UserContext = createContext<UserContext | null>(null);

export function useUser() {
  const context = useContext(UserContext);
  if (!context) throw new Error("useUser must be used within a UserContextProvider");

  return context;
}

export function UserContextProvider({ children }: UserContextProps) {
  const [user, setUser] = useState<string>("");

  return <UserContext.Provider value={{ user, setUser }}>{children}</UserContext.Provider>;
}
