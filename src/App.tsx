import { Route, Routes } from "react-router-dom";
import Layout from "@/components/Layout";
import Home from "@/pages/Home";
import Landmark from "@/pages/Landmark";
import "./CSS/output.css";

export default function App() {
  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route index element={<Home />} />
        <Route path="/country/:landmark" element={<Landmark />} />
      </Route>
    </Routes>
  );
}
