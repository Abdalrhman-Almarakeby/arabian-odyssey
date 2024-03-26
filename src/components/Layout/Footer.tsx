import { HashLink } from "react-router-hash-link";

export function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="m-4 rounded-lg bg-white shadow">
      <div className="mx-auto w-full max-w-screen-xl p-4 md:flex md:items-center md:justify-between">
        <span className="text-sm text-gray-500 sm:text-center">
          © {year}{" "}
          <HashLink to="/#" className="hover:underline">
            Arabian Odyssey
          </HashLink>
          . All Rights Reserved.
        </span>
        <ul className="mt-3 flex flex-wrap items-center text-sm font-medium text-gray-500 sm:mt-0">
          <li>
            <HashLink to="/#" className="me-4 hover:underline md:me-6">
              About
            </HashLink>
          </li>
          <li>
            <HashLink to="/#" className="me-4 hover:underline md:me-6">
              Privacy Policy
            </HashLink>
          </li>
          <li>
            <HashLink to="/#" className="me-4 hover:underline md:me-6">
              Licensing
            </HashLink>
          </li>
          <li>
            <HashLink to="/#" className="hover:underline">
              Contact
            </HashLink>
          </li>
        </ul>
      </div>
    </footer>
  );
}
