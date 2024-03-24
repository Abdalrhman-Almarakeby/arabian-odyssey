import { Attraction } from "./attraction";

export type Category = {
  id: string;
  desc: string;
  image: {
    path: string;
  };
  name: string;
};

export type CategoryData = Category & {
  attractions: Attraction[];
};
