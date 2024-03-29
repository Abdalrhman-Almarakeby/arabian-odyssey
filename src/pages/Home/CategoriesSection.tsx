import { useEffect, useState } from "react";
import { Spinner } from "flowbite-react";
import axios from "axios";
import LocationCrosshairsSVG from "@/assets/icons/location-crosshairs.svg?react";
import { SectionHeading } from "@/components/SectionHeading";
import { Category } from "@/types/category";
import { HashLink } from "react-router-hash-link";

type CategoriesSectionProps = {
  title: boolean;
};

export function CategoriesSection({ title }: CategoriesSectionProps) {
  const [categories, setCategories] = useState<Category[]>([]);

  useEffect(() => {
    axios
      .get("https://arabian-odyssey.vercel.app/category")
      .then((res: { data: { category: Category[] } }) => {
        setCategories(res.data.category);
      });
  }, []);

  return (
    <section className="container flex flex-col items-center justify-center gap-8 px-4 lg:gap-12">
      {title && <SectionHeading>Browse By Category</SectionHeading>}

      {categories ? (
        <ul className="grid w-full grid-cols-1 justify-center gap-10 gap-x-4 min-450:grid-cols-2 sm:grid-cols-3 md:grid-cols-4">
          {categories.map((category) => (
            <HashLink key={category.name} to={`/category/${category.id}#`}>
              <li className="group relative flex flex-col items-center justify-center overflow-hidden rounded-[0.625rem] bg-primary/10 px-14 py-3 transition duration-500 motion-safe:hover:bg-primary">
                <div className="relative z-10">
                  <img
                    src={category.image && category.image.path}
                    className="mb-2.5 h-16 w-20 rounded bg-primary object-cover transition duration-500 group-hover:bg-secondary"
                  ></img>
                  <h4 className="text-lg mb-4.5 text-center font-bold text-black motion-safe:group-hover:text-white">
                    {category.name}
                  </h4>
                </div>
                <div className="absolute bottom-0 right-0 translate-x-[40%]">
                  <LocationCrosshairsSVG className="w-[115px] -rotate-[10deg] fill-primary/20 duration-1000 motion-safe:group-hover:-rotate-[60deg] motion-safe:group-hover:fill-secondary" />
                </div>
              </li>
            </HashLink>
          ))}
        </ul>
      ) : (
        <div className="grid place-items-center">
          <Spinner color="success" size={"xl"} />
        </div>
      )}
    </section>
  );
}
