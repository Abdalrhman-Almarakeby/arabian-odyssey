import { Attraction } from "./attraction";

export type State = {
  id: string;
  country: string;
  name: string;
  image: {
    path: string;
  };
};

export type StateData = {
  id: string;
  image: {
    path: string;
  };
  name: string;
  country: string;
  user: string;
  attractions: Attraction[];
}