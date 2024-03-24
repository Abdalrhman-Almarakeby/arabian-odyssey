import { Outlet } from "react-router-dom";
import { Header } from "./Header";
import { Footer } from "./Footer";
import { Loading } from "@/components/Loading";

export function Layout({ loading }: { loading: boolean }) {
  return (
    <div className="relative flex min-h-svh flex-col">
      {loading && <Loading />}
      <Header />
      <Outlet />
      <Footer />
    </div>
  );
}
