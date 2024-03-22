import { useEffect } from "react";
import { useLocation, Outlet } from "react-router-dom";
import { Header } from "./Header";
import { Footer } from "./Footer";
import { Loading } from "@/components/Loading";

export function Layout({ loading }: { loading: boolean }) {
  const { pathname } = useLocation();

  useEffect(() => {
    document.documentElement.scrollTo({
      top: 0,
      left: 0,
      behavior: "instant",
    });
  }, [pathname]);

  return (
    <div className="relative flex min-h-svh flex-col">
      {loading && <Loading />}
      <Header />
      <Outlet />
      <Footer />
    </div>
  );
}
