import { useState, useEffect } from "react";

export function useDebounce<T>(initialValue: T, time?: number): [T, T, React.Dispatch<T>] {
  const [value, setValue] = useState<T>(initialValue);
  const [debouncedValue, setDebouncedValue] = useState<T>(initialValue);

  useEffect(() => {
    const id = setTimeout(() => {
      setDebouncedValue(value);
    }, time ?? 500);

    return () => {
      clearTimeout(id);
    };
  }, [value, time]);

  return [debouncedValue, value, setValue];
}
