import { Route, Routes } from "react-router-dom";
import Layout from "@/components/Layout";
import Home from "@/pages/Home";
import Country from "@/pages/Country"
import Error from "@/pages/Error";
import Signup from "@/pages/Signup";
import Signin from "@/pages/Signin";
import "./CSS/output.css";

export default function App() {
  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route index element={<Home />} />
        <Route path="/country/:countryId" element={<Country />} />
        <Route path="/country/:countryId/:stateId" element={<Country />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/signin" element={<Signin />} />
        <Route path="*" element={<Error />} />
      </Route>
    </Routes>
  );
}
