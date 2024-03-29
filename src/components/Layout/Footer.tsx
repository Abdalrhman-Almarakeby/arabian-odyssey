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

      </div>
    </footer>
  );
}
