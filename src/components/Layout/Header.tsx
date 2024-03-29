import { Dispatch, SetStateAction, useEffect, useRef, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { HashLink } from "react-router-hash-link";
import toast from "react-hot-toast";
import { useUser } from "@/contexts/UserContext";
import { useLocalStorageToken } from "@/contexts/LocalStorageTokenContext";
import { useClickOutside } from "@/lib/hooks/useClickOutside";
import UserAvatarSVG from "@/assets/icons/user-avatar.svg?react";
import { cn } from "@/lib/utils";
import { SearchMenu } from "../SearchMenu";
import SearchIcon from "@/assets/icons/search.svg?react";
import DropDownArrowSVG from "@/assets/icons/drop-down-arrow.svg?react";
import BarsSVG from "@/assets/icons/Bars.svg?react";
import XmarkSVG from "@/assets/icons/xmark.svg?react";
import axios from "axios";
import logo from "@/assets/imgs/logo.png";
import { Category } from "@/types/Category";

type HeaderProps = {
  isSearchMenuOpen: boolean;
  setIsSearchMenuOpen: Dispatch<SetStateAction<boolean>>;
};

export function Header({ setIsSearchMenuOpen, isSearchMenuOpen }: HeaderProps) {
  const navigate = useNavigate();
  const { setUser } = useUser();
  const { token, setToken } = useLocalStorageToken();

  const [isUserMenuOpen, setIsUserMenuOpen] = useState(false);
  console.log(isUserMenuOpen);
  const [mobileMenu, setMobileMenu] = useState<boolean>(false);
  const [categoriesMenu, setCategoriesMenu] = useState<boolean>(false);
  const userMenuButtonRef = useRef<HTMLButtonElement>(null);
  const mobileUserMenuButtonRef = useRef<HTMLButtonElement>(null);

  const [isCatagoriesMenuOpen, setIsCatagoriesMenuOpen] = useState(false);
  const [categories, setCategories] = useState<Category[]>([]);

  // useEffect(() => {
    if (window.innerWidth >= 640) {
      useClickOutside(userMenuButtonRef, () => setIsUserMenuOpen(false));
    } else {
      useClickOutside(mobileUserMenuButtonRef, () => setIsUserMenuOpen(false));
    }
  // }, [window.innerWidth]);

  useEffect(() => {
    axios
      .get("https://arabian-odyssey.vercel.app/category")
      .then((res: { data: { category: Category[] } }) => {
        setCategories(res.data.category);
      });
  }, []);

  const catagoriesMenuButtonRef = useRef<HTMLButtonElement>(null);
  useClickOutside(catagoriesMenuButtonRef, () =>
    setIsCatagoriesMenuOpen(false)
  );

  function signOut() {
    setUser(null);
    setToken("");
    toast.success("Signed out successfully.");
    setTimeout(() => navigate("/"), 10);
  }

  return (
    <>
      <header className="container flex justify-between px-4 py-2">
        <div className="flex items-center gap-5 mr-10">
          <HashLink
            to="/#"
            className="flex max-w-[80px] flex-shrink-0 items-center text-3xl font-bold text-primary md:text-4xl lg:text-[2.5rem]"
          >
            <img src={logo} className="max-w-[90px]" />
          </HashLink>
          <span className="hidden sm:block h-1/2 w-[2px] bg-primary"></span>
          {/* categories  */}
        </div>

        {/* user state || login  */}
        <div className="flex items-center sm:hidden">
          {token && (
            <div className="relative flex items-center">
              <button
                className="relative flex rounded-full text-sm focus:outline-none focus:ring-2 focus:ring-primary focus:ring-offset-2"
                onClick={() => {
                  setIsUserMenuOpen(true);
                }}
                ref={mobileUserMenuButtonRef}
              >
                <span className="sr-only">Open user menu</span>
                {/* // TODO: Add the user image (if it is exist) */}
                {
                  /* {user.img? <img
              className="size-9 rounded-full md:size-10 lg:size-12"
              src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80"
              alt="User Profile"
            /> :<UserAvatarSVG className="size-9 rounded-full md:size-10 lg:size-12" />} */
                  // mobile
                }
                <UserAvatarSVG className="size-9 rounded-full text-gray-700 md:size-10 lg:size-12" />{" "}
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
          )}
          <button onClick={() => setMobileMenu(!mobileMenu)}>
            {mobileMenu ? (
              <XmarkSVG className="size-6" />
            ) : (
              <BarsSVG className="size-6" />
            )}
          </button>
        </div>
        <div className="w-full items-center hidden sm:flex">
          <div className="flex items-center gap-5 w-full">
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
                  "bg-white shadow-1 py-2 g z-10 w-48  rounded-md absolute top-[calc(100%+30px)] right-0",
                  isCatagoriesMenuOpen ? "grid" : "hidden"
                )}
                role="menu"
              >
                {categories.map((category) => (
                  <Link
                    to={`/category/${category.id}`}
                    key={category.name}
                    className="bg-white px-4 py-2 text-left text-sm text-gray-700 hover:bg-gray-100 focus:outline-none focus-visible:bg-gray-100"
                    role="menuitem"
                  >
                    {category.name}
                  </Link>
                ))}
              </div>
            </div>
            <button
              aria-label="Seach menu"
              className="flex items-center rounded-3xl bg-gray-200 px-3 py-2 w-full text-sm font-bold mr-6 focus:outline-none focus:ring-2 focus:ring-primary focus:ring-offset-2"
              onClick={() => setIsSearchMenuOpen(true)}
            >
              <SearchIcon className="mr-2 w-4" /> Search
            </button>
          </div>
          <div className="min-w-[180px]">
            {token ? (
              <div className="relative flex items-center">
                <button
                  className="relative flex rounded-full text-sm focus:outline-none focus:ring-2 focus:ring-primary focus:ring-offset-2"
                  onClick={() => setIsUserMenuOpen(true)}
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
                  <UserAvatarSVG className="size-9 rounded-full text-gray-700 md:size-10 lg:size-12" />{" "}
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
          </div>
        </div>
        <SearchMenu
          isSearchMenuOpen={isSearchMenuOpen}
          setIsSearchMenuOpen={setIsSearchMenuOpen}
        />
      </header>
      {mobileMenu && (
        <div className="bg-white border-t-[1px] border-black z-10 w-[100%] relative sm:hidden top-[calc(100%)] right-0">
          <div className="w-full border-b-[1px] flex flex-col justify-center border-black text-base font-bold">
            <button
              onClick={() => setCategoriesMenu(!categoriesMenu)}
              className="flex items-center justify-center w-full py-5 hover:bg-primary hover:text-white duration-300"
            >
              Categories <DropDownArrowSVG className="size-6 " />
            </button>
            <div className="w-full flex flex-col items-center">
              {categoriesMenu &&
                categories.map((category) => (
                  <Link
                    to={`/category/${category.id}`}
                    onClick={() => setMobileMenu(false)}
                    key={category.name}
                    className="w-[80%] py-3 border-b-[1px] flex justify-center border-black text-sm font-normal hover:bg-primary hover:text-white duration-300 last:border-b-0"
                    role="menuitem"
                  >
                    {category.name}
                  </Link>
                ))}
            </div>
          </div>
          <button
            className="hover:fill-white flex w-full items-center justify-center border-b-[1px] border-black py-5 text-base font-bold hover:bg-primary hover:text-white duration-300"
            onClick={() => {
              setIsSearchMenuOpen(true);
              setMobileMenu(false);
            }}
          >
            <SearchIcon className="mr-2 w-4" /> Search
          </button>
          {!token && (
            <>
              <Link
                to={"/signup"}
                onClick={() => setMobileMenu(false)}
                className="block text-center w-full border-b-[1px] border-black py-5 text-base font-bold hover:bg-primary hover:text-white duration-300"
              >
                Register
              </Link>
              <Link
                to={"/signin"}
                onClick={() => setMobileMenu(false)}
                className="block text-center w-full border-b-[1px] border-black py-5 text-base font-bold hover:bg-primary hover:text-white duration-300"
              >
                Login
              </Link>
            </>
          )}
        </div>
      )}
    </>
  );
}
