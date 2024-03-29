import { Attraction } from "./attraction";
import { Category } from "./category";
import { Food } from "./food";
import { State } from "./state";

export type Country = {
  name: string;
  id: string;
  numoftourist: string;
  flag: {
    path: string;
  };
};

export type CountryData = Country & {
  attractions: Attraction[];
  bestTimeToVisit: string;
  capital: string;
  desc: string;
  flag: {
    path: string;
  };
  images: {
    path: string;
  }[];
  states: State[];
  languages: string[];
  popularFood: Food[];
  typesOfTourism: Category[];
};
