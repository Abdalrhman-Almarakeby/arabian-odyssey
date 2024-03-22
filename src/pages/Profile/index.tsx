import { useUser } from "@/contexts/UserContext";
import { useNavigate } from "react-router-dom";

export function Profile() {
  const navigate = useNavigate();
  const { user } = useUser();

  if (!user) {
    navigate("/signin");
  }

  return user && <div>Profile: {user.name}</div>;
}
