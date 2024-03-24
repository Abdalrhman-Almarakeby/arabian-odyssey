export type Attraction = {
  _id: string;
  country: string;
  image: {
    path: string;
    public_id: string;
  };
  isDeleted?: boolean;
  name: string;
  user: string;
  rating: number;
  desc: string;
};