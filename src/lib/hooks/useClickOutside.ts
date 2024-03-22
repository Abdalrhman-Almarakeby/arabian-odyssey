import { RefObject, useEffect, useRef } from "react";

type ClickOutsideCallback = (event: MouseEvent) => void;

export function useClickOutside(ref: RefObject<HTMLElement>, cb: ClickOutsideCallback): void {
  const callbackRef = useRef<ClickOutsideCallback>(cb);

  useEffect(() => {
    callbackRef.current = cb;
  }, [cb]);

  useEffect(() => {
    function handleClickOutside(event: MouseEvent) {
      if (ref.current && !ref.current.contains(event.target as Node)) {
        callbackRef.current(event);
      }
    }

    document.addEventListener("click", handleClickOutside);

    return () => {
      document.removeEventListener("click", handleClickOutside);
    };
  }, [ref]);
}
