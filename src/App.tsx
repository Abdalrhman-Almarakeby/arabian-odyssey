import { useEffect, useState } from "react";
import { Route, Routes } from "react-router-dom";
import axios, { AxiosResponse } from "axios";
import { Toaster } from "react-hot-toast";
import { User } from "@/types/user";
import { useLocalStorageToken } from "@/contexts/LocalStorageTokenContext";
import { useUser } from "@/contexts/UserContext";
import { Layout } from "@/components/Layout";
import { Home } from "@/pages/Home";
import { Country } from "@/pages/Country";
import { Error } from "@/pages/Error";
import { Signup } from "@/pages/Signup";
import { Signin } from "@/pages/Signin";
import { ConfirmEmail } from "@/pages/ConfirmEmail";
import { Category } from "@/pages/Category";
import { Settings } from "@/pages/Settings";
import { Attraction } from "@/pages/Attraction";
import { Profile } from "@/pages/Profile";

import "./CSS/output.css";

export default function App() {
  const { token } = useLocalStorageToken();
  const { setUser } = useUser();
  const [isLoading, setIsLoading] = useState(false);
  const [isSearchMenuOpen, setIsSearchMenuOpen] = useState(false);

  useEffect(() => {
    if (!token) {
      setUser(null);
      setIsLoading(false);
      return;
    }
    setIsLoading(true);

    axios
      .get("https://arabian-odyssey.vercel.app/user", {
        headers: {
          "Content-Type": "application/json",
          "Access-Control-Allow-Origin": "*",
          token: `ArabianOdyssey__${token}`,
        },
      })
      .then((res: AxiosResponse) => res.data)
      .then((data: { message: string; user: User; err?: string }) => {
        if (data.message === "success") {
          setUser(data.user);
        }
      })
      .catch((err) => console.log(err))
      .finally(() => setIsLoading(false));
  }, [setUser, token]);

  return (
    <>
      <Toaster />
      <Routes>
        <Route
          path="/"
          element={
            <Layout
              loading={isLoading}
              setIsSearchMenuOpen={setIsSearchMenuOpen}
              isSearchMenuOpen={isSearchMenuOpen}
            />
          }
        >
          <Route
            index
            element={
              <Home setIsSearchMenuOpen={setIsSearchMenuOpen} isSearchMenuOpen={isSearchMenuOpen} />
            }
          />
          <Route path="/country/:countryId" element={<Country isState={false} />} />
          <Route path="/country/:countryId/:stateId" element={<Country isState={true} />} />
          <Route path="/attraction/:attractionId" element={<Attraction />} />
          <Route path="/signup" element={<Signup />} />
          <Route path="/signin" element={<Signin />} />
          <Route path="/settings" element={<Settings />} />
          <Route
            path="/profile"
            element={
              <Profile
                setIsSearchMenuOpen={setIsSearchMenuOpen}
                isSearchMenuOpen={isSearchMenuOpen}
              />
            }
          />
          <Route path="/category/:categoryId" element={<Category />} />
        </Route>
        <Route path="/confirm-email" element={<ConfirmEmail />} />
        <Route path="*" element={<Error />} />
      </Routes>
    </>
  );
}
