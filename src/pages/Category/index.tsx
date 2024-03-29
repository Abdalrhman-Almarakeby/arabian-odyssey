import { useEffect, useState } from "react";
import { useLocation, useParams } from "react-router-dom";
import axios, { AxiosResponse } from "axios";
import { Spinner } from "flowbite-react";
import { Attractions } from "@/components/Attractions";
import { CountriesSuggestions } from "@/components/CountriesSuggestions";
import { CategoryData } from "@/types/category";
import { HashLink } from "react-router-hash-link";

export function Category() {
  const { categoryId } = useParams();
  const { pathname } = useLocation();
  const [categories, setCategories] = useState<CategoryData[] | null>(null);
  const [category, setCategory] = useState<CategoryData | null>(null);

  useEffect(() => {
    axios
      .get(`https://arabian-odyssey.vercel.app/category/${categoryId}`)
      .then((res: AxiosResponse) => res.data)
      .then((data: { category: CategoryData[] }) => setCategory(data.category[0]))
      .catch((err) => console.log(err));

    axios
      .get(`https://arabian-odyssey.vercel.app/category`)
      .then((res: AxiosResponse) => res.data)
      .then((data: { category: CategoryData[] }) => setCategories(data.category))
      .catch((err) => console.log(err));
  }, [categoryId]);

  return (
    <>
      {category && categories ? (
        <>
          <header className="relative">
            <img
              className="full-screen-height w-full object-cover"
              src={category.image.path}
              alt=""
            />
            <h1 className="absolute bottom-10 left-6 rounded-md bg-black/40 px-4 py-2 text-xl font-bold text-white lg:bottom-15 lg:left-9 lg:text-3xl">
              {category.name}
            </h1>
          </header>
          <main className="container px-6 py-[50px]">
            <h2 className="mb-6 text-4xl font-bold lg:text-[40px]">{category.name}</h2>
            <p className="mb-14">{category.desc}</p>
            <Attractions data={category.attractions} />
            <div className="mb-6 flex items-center gap-2">
              <h2 className="whitespace-nowrap text-2xl font-bold">Other Categories</h2>
              <span className="mt-1 h-[2px] w-full bg-primary"></span>
            </div>
            <div className="flex w-full flex-wrap items-center gap-2 py-2 pb-14">
              {categories
                .filter(({ id }) => id !== category.id)
                .map(({ id, name }) => (
                  <HashLink
                    key={id}
                    className={`border-2 border-black rounded-[100px] py-1 px-3 mr-3 ${
                      pathname.split("/")[2] === id
                        ? "text-white bg-black"
                        : "hover:bg-gray-400 hover:text-white"
                    }`}
                    to={`/category/${id}#`}
                  >
                    {name}
                  </HashLink>
                ))}
            </div>
            <CountriesSuggestions />
          </main>
        </>
      ) : (
        <main className="full-screen-height flex w-full items-center justify-center">
          <Spinner color={"success"} size={"xl"} />
        </main>
      )}
    </>
  );
}
