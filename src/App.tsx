import { useEffect, useState } from "react";
import { Route, Routes } from "react-router-dom";
import axios, { AxiosResponse } from "axios";
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
import { Profile } from "@/pages/Profile";

import "./CSS/output.css";

export default function App() {
  const { token } = useLocalStorageToken();
  const { setUser } = useUser();
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    if (!token) {
      setUser(null);
      setIsLoading(false);
      return;
    }

    axios
      .get("https://arabian-odyssey.vercel.app/user", {
        headers: {
          "Content-Type": "application/json",
          token: `ArabianOdyssey__${token}`,
        },
      })
      .then((res: AxiosResponse) => res.data)
      .then((data: { message: string; user: User; err?: string }) => {
        if (data.message === "success") {
          setUser(data.user);
          setIsLoading(false);
        }
      })
      .catch((err) => console.log(err));
  }, [setUser, token]);

  return (
    <Routes>
      <Route path="/" element={<Layout loading={isLoading} />}>
        <Route index element={<Home />} />
        <Route path="/country/:countryId" element={<Country />} />
        <Route path="/country/:countryId/:stateId" element={<Country />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/signin" element={<Signin />} />
        <Route path="/settings" element={<Settings />} />
        <Route path="/profile" element={<Profile />} />
        <Route path="/category/:categoryId" element={<Category />} />
      </Route>
      <Route path="/confirm-email" element={<ConfirmEmail />} />
      <Route path="*" element={<Error />} />
    </Routes>
  );
}
