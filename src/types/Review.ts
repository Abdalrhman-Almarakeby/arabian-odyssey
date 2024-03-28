export type review = {
  comment: string;
  rating: 1 | 2 | 3 | 4 | 5;
  attraction: string;
  user: {
    _id: string;
    name: string;
    image?: {
      path: string;
    };
  };
};
