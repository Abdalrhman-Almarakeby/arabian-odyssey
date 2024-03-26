import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import axios, { AxiosResponse } from "axios";
import { Spinner } from "flowbite-react";
import { Attractions } from "@/components/Attractions";
import { CountriesSuggestions } from "@/components/CountriesSuggestions";
import { CategoryData } from "@/types/category";
import { BtnsLine } from "@/components/BtnsLine";

export function Category() {
  const { categoryId } = useParams();
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
          <main className="container space-y-15 px-6 py-[50px]">
            <BtnsLine states={categories} base={"/category"} baseBtn={false} />
            <div className="mt-12">
              <h2 className="mb-6 text-4xl font-bold lg:text-[40px]">{category.name}</h2>
              <p className="max-w-[500px]">{category.desc}</p>
            </div>
            <Attractions data={category.attractions} />
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
