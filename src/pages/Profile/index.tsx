import { useUser } from "@/contexts/UserContext";
import { useNavigate } from "react-router-dom";

export function Profile() {
  const navigate = useNavigate();
  const { user } = useUser();

  if (!user) {
    navigate("/signin");
  }

  return user && <div className="container flex-grow px-4">Profile: {user.name}</div>;
}
