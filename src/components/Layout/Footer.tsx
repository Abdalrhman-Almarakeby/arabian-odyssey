import { Link } from "react-router-dom";

export default function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="text-sm lg:text-base">
      <small className="mb-2.5 text-base">@{year} Estatein. All Rights Reserved.</small>
      <Link to="/" className="">
        Terms & Conditions
      </Link>
    </footer>
  );
}
