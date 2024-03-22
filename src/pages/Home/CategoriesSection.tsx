import SectionHeading from "@/components/SectionHeading";
import { faLocationCrosshairs } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import axios from "axios";
import { Spinner } from "flowbite-react";
import { useEffect, useState } from "react";

export default function CategoriesSection() {
  const [categories, setCategories]: any = useState(false);
  useEffect(() => {
    axios.get("https://arabian-odyssey.vercel.app/category").then((res) => {
      setCategories(res.data.category);
    });
  }, []);
  return (
    <section className="container flex flex-col items-center justify-center gap-8 px-4 lg:gap-12">
      <SectionHeading>Browse By Category</SectionHeading>

      <ul className="grid grid-cols-1 min-450:grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-10 gap-x-4 w-full justify-center">
        {categories ? (
          categories.map((category: any) => (
            <li className="relative group flex flex-col items-center justify-center rounded-[0.625rem] bg-primary/10 hover:bg-primary px-14 py-3 overflow-hidden">
              <div className="relative z-10">
                <img
                  src={category.image && category.image.path}
                  className="mb-2.5 w-20 h-16 bg-primary group-hover:bg-secondary rounded"
                ></img>
                <h4 className="mb-4.5 text-lg font-bold text-black group-hover:text-white text-center">
                  {category.name}
                </h4>
              </div>
              <div className="absolute right-0 bottom-0 translate-x-[40%]">
                <FontAwesomeIcon
                  icon={faLocationCrosshairs}
                  className="text-[100px] text-primary/20 -rotate-[10deg] group-hover:-rotate-[60deg] duration-1000 group-hover:text-secondary"
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
