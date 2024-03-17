import { useEffect, useState } from "react";

type FetchState<T> = {
  data: T | null;
  isPending: boolean;
  error: string | null;
};

type Options = RequestInit;

export function useFetch<T>(url: string, options?: Options): FetchState<T> {
  const [data, setData] = useState<T | null>(null);
  const [isPending, setIsPending] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        setIsPending(true);

        const response = await fetch(url, options);
        if (!response.ok) {
          throw new Error(`Request failed with status: ${response.status}`);
        }
        const result = await response.json();

        setData(result);
        setError(null);
      } catch (error) {
        setError(error instanceof Error ? error.message : "Something went wrong");
      } finally {
        setIsPending(false);
      }
    };

    fetchData();
  }, [url, options]);

  return { data, isPending, error };
}
