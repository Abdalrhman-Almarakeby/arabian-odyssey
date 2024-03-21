import { useCallback, useState, useEffect, SetStateAction, Dispatch } from "react";

function useStorage<T>(
  key: string,
  defaultValue: T | (() => T),
  storageObject: Storage
): { value: T; setValue: Dispatch<SetStateAction<T>>; remove: () => void } {
  const [value, setValue] = useState<T>(() => {
    const jsonValue = storageObject.getItem(key);
    if (jsonValue != null) return JSON.parse(jsonValue);

    if (typeof defaultValue === "function") return (defaultValue as () => T)();

    return defaultValue;
  });

  useEffect(() => {
    if (value === undefined) {
      storageObject.removeItem(key);
    } else {
      storageObject.setItem(key, JSON.stringify(value));
    }
  }, [key, value, storageObject]);

  const remove = useCallback(() => {
    setValue(undefined as unknown as T);
  }, []);

  return { value, setValue, remove };
}

export function useLocalStorage<T>(key: string, defaultValue: T | (() => T)) {
  return useStorage(key, defaultValue, window.localStorage);
}

export function useSessionStorage<T>(key: string, defaultValue: T | (() => T)) {
  return useStorage(key, defaultValue, window.sessionStorage);
}
