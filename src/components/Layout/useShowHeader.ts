import { useEffect, useState } from "react";

export function useShowHeader() {
  const [onTop, setOnTop] = useState(true);
  const [scrollDirection, setScrollDirection] = useState<"up" | "down" | null>(null);

  useEffect(() => {
    let lastScrollY = window.pageYOffset;

    function handleScroll() {
      if (window.scrollY > 100) {
        setOnTop(false);
      } else {
        setOnTop(true);
      }

      const scrollY = window.pageYOffset;
      const direction = scrollY > lastScrollY ? "down" : "up";
      if (
        direction !== scrollDirection &&
        (scrollY - lastScrollY > 15 || scrollY - lastScrollY < -5)
      ) {
        setScrollDirection(direction);
      }
      lastScrollY = scrollY > 0 ? scrollY : 0;
    }

    window.addEventListener("scroll", handleScroll);

    return () => window.removeEventListener("scroll", handleScroll);
  }, [scrollDirection]);

  return !(scrollDirection === "down") || onTop;
}
