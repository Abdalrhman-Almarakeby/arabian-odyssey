import { Category } from "./category";
import { Country } from "./country";
import { State } from "./state";

export type Attraction = {
  _id: string;
  country: Country;
  image: {
    path: string;
    public_id: string;
  };
  images: {
    path: string;
    public_id: string;
  }[];
  isDeleted?: boolean;
  name: string;
  user: string;
  rating: number;
  desc: string;
  admissionFees: string;
  openingHours: string;
  state: State;
  category: Category[]
};