import { SectionHeading } from "@/components/SectionHeading";
import { faLocationCrosshairs } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import axios from "axios";
import { Spinner } from "flowbite-react";
import { useEffect, useState } from "react";

export default function CategoriesSection() {
  const [categories, setCategories]: unknown = useState(false);
  useEffect(() => {
    axios.get("https://arabian-odyssey.vercel.app/category").then((res: unknown) => {
      setCategories(res.data.category);
    });
  }, []);
  return (
    <section className="container flex flex-col items-center justify-center gap-8 px-4 lg:gap-12">
      <SectionHeading>Browse By Category</SectionHeading>

      <ul className="grid w-full grid-cols-1 justify-center gap-10 gap-x-4 min-450:grid-cols-2 sm:grid-cols-3 md:grid-cols-4">
        {categories ? (
          categories.map((category: unknown) => (
            <li
              key={category.name}
              className="group relative flex flex-col items-center justify-center overflow-hidden rounded-[0.625rem] bg-primary/10 px-14 py-3 hover:bg-primary"
            >
              <div className="relative z-10">
                <img
                  src={category.image && category.image.path}
                  className="mb-2.5 h-16 w-20 rounded bg-primary group-hover:bg-secondary"
                ></img>
                <h4 className="text-lg mb-4.5 text-center font-bold text-black group-hover:text-white">
                  {category.name}
                </h4>
              </div>
              <div className="absolute bottom-0 right-0 translate-x-[40%]">
                <FontAwesomeIcon
                  icon={faLocationCrosshairs}
                  className="-rotate-[10deg] text-[100px] text-primary/20 duration-1000 group-hover:-rotate-[60deg] group-hover:text-secondary"
                />
              </div>
            </li>
          ))
        ) : (
          <Spinner color="success" size={"xl"} />
        )}
      </ul>
    </section>
  );
}
