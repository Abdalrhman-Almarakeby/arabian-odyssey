import { LatLngExpression } from "leaflet";
import { Category } from "./Category";
import { Country } from "./Country";
import { State } from "./state";
import { review } from "./review";

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
  category: Category[];
  locationCoordinates: LatLngExpression;
  Review: review[];
};
