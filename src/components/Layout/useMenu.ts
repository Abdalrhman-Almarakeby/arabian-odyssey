import { useEffect } from "react";
import { useDebounce } from "@/lib/hooks/useDebounce";
export function useMenu(menuRef: React.RefObject<HTMLElement>) {
  const [debounceIsOpen, isOpen, setIsOpen] = useDebounce(false);

  function toggle() {
    setIsOpen(!debounceIsOpen);
  }

  function menuTransitionEnd(e: React.TransitionEvent<HTMLElement>) {
    const target = e.target as Element;
    if (menuRef.current !== target) return;

    if (isOpen) {
      target.classList.add("visible");
      target.classList.remove("invisible");
    } else {
      target.classList.add("invisible");
      target.classList.remove("visible");
    }
  }

  useEffect(() => {
    // close the menu when the window is scrolled by down or up more than 50px
    let prevScrollPos = 0;

    function handleScroll() {
      const currentScrollPos = window.scrollY;
      const scrollDown = currentScrollPos > prevScrollPos;
      const scrollUp = currentScrollPos < prevScrollPos;
      const scrollAmount = Math.abs(currentScrollPos - prevScrollPos);

      if ((isOpen && scrollDown && scrollAmount > 5) || (scrollUp && scrollAmount > 5)) {
        setIsOpen(false);
      }

      prevScrollPos = currentScrollPos;
    }

    window.addEventListener("scroll", handleScroll);

    return () => window.removeEventListener("scroll", handleScroll);
  }, [isOpen, setIsOpen]);

  return {
    isOpen,
    toggle,
    menuTransitionEnd,
  };
}
