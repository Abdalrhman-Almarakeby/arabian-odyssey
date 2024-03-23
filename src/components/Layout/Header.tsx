import { useRef, useState } from "react";
import { Link } from "react-router-dom";
import { HashLink } from "react-router-hash-link";
import { useUser } from "@/contexts/UserContext";
import { useLocalStorageToken } from "@/contexts/LocalStorageTokenContext";
import { useClickOutside } from "@/lib/hooks/useClickOutside";
import DropDownArrowSVG from "@/assets/icons/drop-down-arrow.svg?react";
import UserAvatarSVG from "@/assets/icons/user-avatar.svg?react";
import { cn } from "@/lib/utils";

const CATAGORIES = [
  "Cultural",
  "Religious",
  "Adventure",
  "Ecotourists",
  "Food and Culinary",
  "Historical",
  "Educational",
  "Beach",
];

export function Header() {
  const { user, setUser } = useUser();
  const { setToken } = useLocalStorageToken();

  const [isUserMenuOpen, setIsUserMenuOpen] = useState(false);
  const userMenuButtonRef = useRef<HTMLButtonElement>(null);
  useClickOutside(userMenuButtonRef, () => setIsUserMenuOpen(false));

  const [isCatagoriesMenuOpen, setIsCatagoriesMenuOpen] = useState(false);
  const catagoriesMenuButtonRef = useRef<HTMLButtonElement>(null);
  useClickOutside(catagoriesMenuButtonRef, () => setIsCatagoriesMenuOpen(false));

  function signOut() {
    setUser(null);
    setToken("");
  }

  return (
    <header className="container relative flex items-center gap-4 px-4 py-2 lg:py-3">
      <HashLink
        to="/#"
        className="mr-auto flex flex-shrink-0 items-center text-3xl font-bold text-primary md:text-4xl lg:text-[2.5rem]"
      >
        Logo
      </HashLink>
      <div className="relative flex items-center">
        <button
          aria-label="Categories menu"
          className="relative flex items-center rounded-sm text-sm font-bold focus:outline-none focus:ring-2 focus:ring-primary focus:ring-offset-2"
          onFocus={() => {
            setIsCatagoriesMenuOpen(true);
            setIsUserMenuOpen(false);
          }}
          ref={catagoriesMenuButtonRef}
        >
          Catagories <DropDownArrowSVG className="text-gray-700" />
        </button>

        <div
          className={cn(
            "bg-white shadow-1 py-2 g z-10 w-48  rounded-md absolute top-[calc(100%+20px)] right-0",
            isCatagoriesMenuOpen ? "grid" : "hidden"
          )}
          role="menu"
        >
          {CATAGORIES.map((category) => (
            <Link
              to={`/category/${category.toLowerCase()}`}
              key={category}
              className="bg-white px-4 py-2 text-left text-sm text-gray-700 hover:bg-gray-100 focus:outline-none focus-visible:bg-gray-100"
              role="menuitem"
            >
              {category}
            </Link>
          ))}
        </div>
      </div>

      {user ? (
        <div className="relative flex items-center">
          <button
            className="relative flex rounded-full text-sm focus:outline-none focus:ring-2 focus:ring-primary focus:ring-offset-2"
            onFocus={() => {
              setIsUserMenuOpen(true);
              setIsCatagoriesMenuOpen(false);
            }}
            ref={userMenuButtonRef}
          >
            <span className="sr-only">Open user menu</span>
            {/* // TODO: Add the user image (if it is exist) */}
            {/* {user.img? <img
              className="size-9 rounded-full md:size-10 lg:size-12"
              src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80"
              alt="User Profile"
            /> :<UserAvatarSVG className="size-9 rounded-full md:size-10 lg:size-12" />} */}
            <UserAvatarSVG className="size-9 rounded-full text-gray-700 md:size-10 lg:size-12" />
          </button>

          <div
            className={cn(
              "bg-white shadow-1 py-2 g z-10 w-48 rounded-md absolute top-[calc(100%+20px)] right-0",
              isUserMenuOpen ? "grid" : "hidden"
            )}
          >
            <Link
              to="/profile"
              className="bg-white px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 focus:outline-none focus-visible:bg-gray-100"
            >
              Your Profile
            </Link>
            <Link
              to="/settings"
              className="bg-white px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 focus:outline-none focus-visible:bg-gray-100"
            >
              Settings
            </Link>
            <button
              onClick={() => signOut()}
              className="bg-white px-4 py-2 text-left text-sm text-gray-700 hover:bg-gray-100 focus:outline-none focus-visible:bg-gray-100"
            >
              Sign out
            </button>
          </div>
        </div>
      ) : (
        <div className="flex items-center gap-2 md:gap-4">
          <Link
            to="/signin"
            className="text-xs rounded-md border border-primary px-2 py-1 font-medium md:px-3 md:py-2 md:text-sm"
          >
            Log in
          </Link>
          <Link
            to="/signup"
            className="text-xs rounded-md bg-primary px-2 py-1 font-medium text-white md:px-3 md:py-2 md:text-sm"
          >
            Register
          </Link>
        </div>
      )}
    </header>
  );
}
