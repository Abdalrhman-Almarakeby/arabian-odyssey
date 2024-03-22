import { useParams } from "react-router-dom";

export function Category() {
  const { category } = useParams();

  return <div className="container flex-grow px-4">Category: {category}</div>;
}
