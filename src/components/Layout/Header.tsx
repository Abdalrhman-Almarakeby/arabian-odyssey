import { Fragment } from "react";
import { Link, useLocation } from "react-router-dom";
import { HashLink } from "react-router-hash-link";
import { useUser } from "@/contexts/UserContext";
import { useLocalStorageToken } from "@/contexts/LocalStorageTokenContext";
import { Disclosure, Menu, Transition } from "@headlessui/react";
import { Bars3Icon, BellIcon, XMarkIcon } from "@heroicons/react/24/outline";
import { cn } from "@/lib/utils";

const navigation = [
  { name: "Home", href: "/#" },
  { name: "About", href: "/about#" },
  { name: "Projects", href: "#" },
  { name: "Calendar", href: "#" },
];

export function Header() {
  const { pathname } = useLocation();
  const { setUser, user } = useUser();
  const { setToken } = useLocalStorageToken();

  function signOut() {
    setUser("");
    setToken("");
  }

  return (
    <Disclosure as="nav" className="shadow">
      {({ open }: { open: boolean }) => (
        <>
          <div className="mx-auto max-w-7xl px-2 sm:px-6 lg:px-8">
            <div className="relative flex h-16 justify-between">
              <div className="absolute inset-y-0 left-0 flex items-center sm:hidden">
                {/* Mobile menu button*/}
                <Disclosure.Button className="relative inline-flex items-center justify-center rounded-md p-2 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-primary">
                  <span className="absolute -inset-0.5" />
                  <span className="sr-only">Open main menu</span>
                  {open ? (
                    <XMarkIcon className="block h-6 w-6" aria-hidden="true" />
                  ) : (
                    <Bars3Icon className="block h-6 w-6" aria-hidden="true" />
                  )}
                </Disclosure.Button>
              </div>
              <div className="flex flex-1 items-center justify-center sm:items-stretch sm:justify-start">
                <HashLink
                  to="/#"
                  className="flex flex-shrink-0 items-center text-3xl font-bold text-primary"
                >
                  Logo
                </HashLink>
                <div className="hidden sm:ml-6 sm:flex">
                  <div className="flex space-x-4">
                    {navigation.map((item) => (
                      <HashLink
                        key={item.name}
                        to={item.href}
                        className={cn(
                          "grid place-items-center  px-3 py-2 text-base font-medium border-b-2 border-b-transparent",
                          item.href.split("#")[0] === pathname
                            ? "text-gray-900  border-b-primary"
                            : " text-gray-500 hover:text-gray-700 hover:border-b-gray-300"
                        )}
                        aria-current={item.href.split("#")[0] === pathname ? "page" : undefined}
                      >
                        {item.name}
                      </HashLink>
                    ))}
                  </div>
                </div>
              </div>
              {user ? (
                <div className="absolute inset-y-0 right-0 flex items-center pr-2 sm:static sm:inset-auto sm:ml-6 sm:pr-0">
                  <button
                    type="button"
                    className="relative rounded-full p-1 text-gray-400 transition hover:text-gray-600 focus:outline-none focus:ring-2 focus:ring-primary focus:ring-offset-2"
                  >
                    <span className="absolute -inset-1.5" />
                    <span className="sr-only">View notifications</span>
                    <BellIcon className="h-6 w-6" aria-hidden="true" />
                  </button>

                  {/* Profile dropdown */}

                  <Menu as="div" className="relative ml-3">
                    <div>
                      <Menu.Button className="relative flex rounded-full text-sm focus:outline-none focus:ring-2 focus:ring-primary focus:ring-offset-2">
                        <span className="absolute -inset-1.5" />
                        <span className="sr-only">Open user menu</span>
                        <img
                          className="h-8 w-8 rounded-full"
                          src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80"
                          alt=""
                        />
                      </Menu.Button>
                    </div>
                    <Transition
                      as={Fragment}
                      enter="transition ease-out duration-100"
                      enterFrom="transform opacity-0 scale-95"
                      enterTo="transform opacity-100 scale-100"
                      leave="transition ease-in duration-75"
                      leaveFrom="transform opacity-100 scale-100"
                      leaveTo="transform opacity-0 scale-95"
                    >
                      <Menu.Items className="absolute right-0 z-10 mt-2 w-48 origin-top-right rounded-md bg-white py-1 shadow-lg ring-1 ring-primary ring-opacity-5 focus:outline-none">
                        <Menu.Item>
                          {({ active }: { active: boolean }) => (
                            <HashLink
                              to="/#"
                              className={cn(
                                active ? "bg-gray-100" : "",
                                "block px-4 py-2 text-sm text-gray-700"
                              )}
                            >
                              Your Profile
                            </HashLink>
                          )}
                        </Menu.Item>
                        <Menu.Item>
                          {({ active }: { active: boolean }) => (
                            <HashLink
                              to="/#"
                              className={cn(
                                active ? "bg-gray-100" : "",
                                "block px-4 w-full  py-2 text-sm text-gray-700"
                              )}
                            >
                              Settings
                            </HashLink>
                          )}
                        </Menu.Item>
                        <Menu.Item>
                          {({ active }: { active: boolean }) => (
                            <button
                              onClick={() => signOut()}
                              className={cn(
                                active ? "bg-gray-100" : "",
                                "block px-4 py-2 text-sm w-full text-left text-gray-700"
                              )}
                            >
                              Sign out
                            </button>
                          )}
                        </Menu.Item>
                      </Menu.Items>
                    </Transition>
                  </Menu>
                </div>
              ) : (
                <div className="absolute inset-y-0 right-0 flex items-center gap-2 pr-2 sm:static sm:inset-auto sm:ml-6 sm:pr-0 md:gap-4">
                  <Link
                    to="/signin"
                    className="rounded-md border border-primary px-2 py-1 text-xs font-medium md:px-3 md:py-2 md:text-sm"
                  >
                    Log in
                  </Link>
                  <Link
                    to="/signup"
                    className="rounded-md bg-primary px-2 py-1 text-xs font-medium text-white md:px-3 md:py-2 md:text-sm"
                  >
                    Register
                  </Link>
                </div>
              )}
            </div>
          </div>

          <Disclosure.Panel className="sm:hidden">
            <div className="space-y-1 px-2 pb-3 pt-2">
              {navigation.map((item) => (
                <Disclosure.Button
                  key={item.name}
                  as="a"
                  href={item.href}
                  className={cn(
                    "block px-3 py-2 text-base font-medium border-l-2 border-l-transparent",
                    item.href.split("#")[0] === pathname
                      ? "text-gray-900  border-l-primary bg-primary/10"
                      : " text-gray-500 "
                  )}
                  aria-current={item.href.split("#")[0] === pathname ? "page" : undefined}
                >
                  {item.name}
                </Disclosure.Button>
              ))}
            </div>
          </Disclosure.Panel>
        </>
      )}
    </Disclosure>
  );
}
