import { useLocalStorage } from "@/lib/hooks/useStorage";
import { Dispatch, SetStateAction, createContext, useContext } from "react";

type LocalStorageTokenContextProps = {
  children: React.ReactNode;
};

type LocalStorageTokenContext = {
  token: string;
  setToken: Dispatch<SetStateAction<string>>;
  removeToken: () => void;
};

const LocalStorageTokenContext = createContext<LocalStorageTokenContext | null>(null);

export function useLocalStorageToken() {
  const context = useContext(LocalStorageTokenContext);
  if (!context)
    throw new Error("useLocalStorageToken must be used within a LocalStorageTokenContextProvider");

  return context;
}

export function LocalStorageTokenContextProvider({ children }: LocalStorageTokenContextProps) {
  const {
    value: token,
    setValue: setToken,
    remove: removeToken,
  } = useLocalStorage<string>("token", "");

  return (
    <LocalStorageTokenContext.Provider value={{ token, setToken, removeToken }}>
      {children}
    </LocalStorageTokenContext.Provider>
  );
}
