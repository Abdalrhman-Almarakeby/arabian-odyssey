import { useUser } from "@/contexts/UserContext";
import { useEffect } from "react";
import { useNavigate } from "react-router-dom";

export function Settings() {
  const navigate = useNavigate();
  const { user } = useUser();

  useEffect(() => {
    if (!user) navigate("/");
  }, [navigate, user]);

  return user && <div className="container flex-grow px-4">Settings: {user.name}</div>;
}
