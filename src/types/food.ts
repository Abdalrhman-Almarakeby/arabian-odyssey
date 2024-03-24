export type Food = {
  country: string;
  desc: string;
  image: {
    path: string;
  };
  name: string;
  rating?: number;
  _id: string;
  images: { path: string }[];
};
