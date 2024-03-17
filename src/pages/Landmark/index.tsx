import { useParams } from "react-router-dom";

export default function Landmark() {
  const { landmark } = useParams();
  return <div>Landmark: {landmark}</div>;
}
