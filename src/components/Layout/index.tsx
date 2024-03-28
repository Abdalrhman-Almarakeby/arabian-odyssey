import { Outlet } from "react-router-dom";
import { Header } from "./Header";
import { Footer } from "./Footer";
import { Loading } from "@/components/Loading";
import { Dispatch, SetStateAction } from "react";

type LayoutProps = {
  loading: boolean;
  isSearchMenuOpen: boolean;
  setIsSearchMenuOpen: Dispatch<SetStateAction<boolean>>
}

export function Layout({ loading, isSearchMenuOpen, setIsSearchMenuOpen }: LayoutProps) {
  return (
    <div className="relative flex min-h-svh flex-col">
      {loading && <Loading />}
      <Header isSearchMenuOpen={isSearchMenuOpen} setIsSearchMenuOpen={setIsSearchMenuOpen} />
      <Outlet />
      <Footer />
    </div>
  );
}
