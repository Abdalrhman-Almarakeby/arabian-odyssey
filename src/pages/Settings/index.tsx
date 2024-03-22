import { useUser } from "@/contexts/UserContext";
import { useNavigate } from "react-router-dom";

export function Settings() {
  const navigate = useNavigate();
  const { user } = useUser();

  if (!user) {
    navigate("/signin");
  }

  return user && <div className="container px-4 flex-grow">Settings: {user.name}</div>;
}
