import { useEffect, useState, Suspense, lazy } from "react";
import { Route, Routes } from "react-router-dom";
import axios, { AxiosResponse } from "axios";
import { Toaster } from "react-hot-toast";
import { User } from "@/types/user";
import { useLocalStorageToken } from "@/contexts/LocalStorageTokenContext";
import { useUser } from "@/contexts/UserContext";
import { Layout } from "@/components/Layout";

const Home = lazy(() => import("@/pages/Home").then((module) => ({ default: module.Home })));
const Country = lazy(() =>
  import("@/pages/Country").then((module) => ({ default: module.Country }))
);
const Error = lazy(() => import("@/pages/Error").then((module) => ({ default: module.Error })));
const Signup = lazy(() => import("@/pages/Signup").then((module) => ({ default: module.Signup })));
const Signin = lazy(() => import("@/pages/Signin").then((module) => ({ default: module.Signin })));
const ConfirmEmail = lazy(() =>
  import("@/pages/ConfirmEmail").then((module) => ({ default: module.ConfirmEmail }))
);
const Category = lazy(() =>
  import("@/pages/Category").then((module) => ({ default: module.Category }))
);
const Settings = lazy(() =>
  import("@/pages/Settings").then((module) => ({ default: module.Settings }))
);
const Attraction = lazy(() =>
  import("@/pages/Attraction").then((module) => ({ default: module.Attraction }))
);
const Profile = lazy(() =>
  import("@/pages/Profile").then((module) => ({ default: module.Profile }))
);

import "./CSS/output.css";
import { Spinner } from "flowbite-react";

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
              <Suspense
                fallback={
                  <div className="flex h-[calc(100svh-64px)] items-center justify-center">
                    <Spinner color="success" size={"xl"} />
                  </div>
                }
              >
                <Home />
              </Suspense>
            }
          />
          <Route
            path="/country/:countryId"
            element={
              <Suspense
                fallback={
                  <div className="flex h-[calc(100svh-64px)] items-center justify-center">
                    <Spinner color="success" size={"xl"} />
                  </div>
                }
              >
                <Country isState={false} />
              </Suspense>
            }
          />
          <Route
            path="/country/:countryId/:stateId"
            element={
              <Suspense
                fallback={
                  <div className="flex h-[calc(100svh-64px)] items-center justify-center">
                    <Spinner color="success" size={"xl"} />
                  </div>
                }
              >
                <Country isState={true} />
              </Suspense>
            }
          />
          <Route
            path="/attraction/:attractionId"
            element={
              <Suspense
                fallback={
                  <div className="flex h-[calc(100svh-64px)] items-center justify-center">
                    <Spinner color="success" size={"xl"} />
                  </div>
                }
              >
                <Attraction />
              </Suspense>
            }
          />
          <Route
            path="/signup"
            element={
              <Suspense
                fallback={
                  <div className="flex h-[calc(100svh-64px)] items-center justify-center">
                    <Spinner color="success" size={"xl"} />
                  </div>
                }
              >
                <Signup />
              </Suspense>
            }
          />
          <Route
            path="/signin"
            element={
              <Suspense
                fallback={
                  <div className="flex h-[calc(100svh-64px)] items-center justify-center">
                    <Spinner color="success" size={"xl"} />
                  </div>
                }
              >
                <Signin />
              </Suspense>
            }
          />
          <Route
            path="/settings"
            element={
              <Suspense
                fallback={
                  <div className="flex h-[calc(100svh-64px)] items-center justify-center">
                    <Spinner color="success" size={"xl"} />
                  </div>
                }
              >
                <Settings />
              </Suspense>
            }
          />
          <Route
            path="/profile"
            element={
              <Suspense
                fallback={
                  <div className="flex h-[calc(100svh-64px)] items-center justify-center">
                    <Spinner color="success" size={"xl"} />
                  </div>
                }
              >
                <Profile
                  setIsSearchMenuOpen={setIsSearchMenuOpen}
                  isSearchMenuOpen={isSearchMenuOpen}
                />
              </Suspense>
            }
          />
          <Route
            path="/category/:categoryId"
            element={
              <Suspense
                fallback={
                  <div className="flex h-[calc(100svh-64px)] items-center justify-center">
                    <Spinner color="success" size={"xl"} />
                  </div>
                }
              >
                <Category />
              </Suspense>
            }
          />
        </Route>
        <Route
          path="/confirm-email"
          element={
            <Suspense
              fallback={
                <div className="flex h-[calc(100svh-64px)] items-center justify-center">
                  <Spinner color="success" size={"xl"} />
                </div>
              }
            >
              <ConfirmEmail />
            </Suspense>
          }
        />
        <Route path="*" element={<Error />} />
      </Routes>
    </>
  );
}
