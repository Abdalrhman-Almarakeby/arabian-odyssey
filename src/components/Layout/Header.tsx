import { useRef } from "react";
import { Link, useLocation } from "react-router-dom";
import { useMenu } from "./useMenu";
import { useShowHeader } from "./useShowHeader";
import { cn } from "@/lib/utils";
import XIconSVG from "@/assets/icons/x-mark.svg?react";
import BurgerIconSVG from "@/assets/icons/burger-menu.svg?react";

export default function Header() {
  const { pathname } = useLocation();
  const menuRef = useRef<HTMLElement>(null);

  const showHeader = useShowHeader();
  const { isOpen, toggle, menuTransitionEnd } = useMenu(menuRef);

  return (
    <header
      className={cn(
        "border-y z-40 border-y-gray-15 fixed  w-full left-0 md:static transition-[top] duration-300 bg-gray-10 py-5 text-sm  2xl:py-5 2xl:text-lg",
        showHeader ? "top-0" : "-top-full md:top-0"
      )}
    >
      <div className="container flex items-center justify-between md:block">
        <div className="w-[100px] text-4xl md:hidden">Logo</div>
        <nav
          id="main-menu"
          aria-label="Main menu"
          aria-expanded={isOpen}
          aria-hidden={window.innerWidth < 768 && !isOpen}
          role="menu"
          ref={menuRef}
          className={cn(
            "absolute z-50 top-0 flex h-svh w-svw flex-col items-center gap-5 self-stretch pt-20 text-3xl backdrop-blur-md transition-[right] duration-300 md:visible md:static md:flex md:size-auto md:flex-row md:gap-1 md:pt-0 md:text-base md:backdrop-blur-none 2xl:gap-1.5",
            isOpen ? "right-0" : "-right-[110%]"
          )}
          onTransitionEnd={menuTransitionEnd}
        >
          <div className="mr-auto hidden w-[100px] text-4xl md:block lg:w-[110px] xl:w-[130px] 2xl:w-[160px]">
            Logo
          </div>
          <Link
            onClick={() => isOpen && toggle()}
            to="/"
            role="menuitem"
            className={cn(
              "rounded-[0.625rem] border border-transparent px-5 py-3 transition duration-300 2xl:px-6 2xl:py-3.5",
              pathname === "/" && "md:bg-gray-08 md:border-gray-15"
            )}
          >
            Home
          </Link>
          <Link
            onClick={() => isOpen && toggle()}
            to="/about"
            role="menuitem"
            className={cn(
              "rounded-[0.625rem] border border-transparent px-5 py-3 transition duration-300 2xl:px-6 2xl:py-3.5",
              pathname === "/about" && "md:bg-gray-08 md:border-gray-15"
            )}
          >
            About Us
          </Link>
          <Link
            onClick={() => isOpen && toggle()}
            to="/properties"
            role="menuitem"
            className={cn(
              "rounded-[0.625rem] border border-transparent px-5 py-3 transition duration-300 2xl:px-6 2xl:py-3.5",
              pathname === "/properties" && "md:bg-gray-08 md:border-gray-15"
            )}
          >
            Properties
          </Link>
          <Link
            onClick={() => isOpen && toggle()}
            to="/services"
            role="menuitem"
            className={cn(
              "rounded-[0.625rem] border border-transparent px-5 py-3 transition duration-300 2xl:px-6 2xl:py-3.5",
              pathname === "/services" && "md:bg-gray-08 md:border-gray-15"
            )}
          >
            Services
          </Link>
          <Link
            onClick={() => isOpen && toggle()}
            to="/contact"
            role="menuitem"
            className="md:border-gray-15 md:bg-gray-08 rounded-[0.625rem] px-5 py-3 md:ml-auto md:border 2xl:px-6 2xl:py-3.5"
          >
            Contact Us
          </Link>
        </nav>
        <button
          aria-expanded={isOpen}
          aria-controls="main-menu"
          aria-label="Toggle menu"
          onClick={toggle}
          className="z-[99999] md:hidden"
        >
          {isOpen ? (
            <XIconSVG
              role="img"
              aria-label="Close navigation menu."
              className="size-10 fill-black stroke-black"
            />
          ) : (
            <BurgerIconSVG
              role="img"
              aria-label="Open navigation menu."
              className="size-10 fill-black stroke-black"
            />
          )}
          <span className="sr-only">{isOpen ? "Close Menu" : "Open Menu"}</span>
        </button>
      </div>
    </header>
  );
}
