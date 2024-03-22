import { useParams } from "react-router-dom";

export function Category() {
  const { category } = useParams();

  return <div>Category: {category}</div>;
}
