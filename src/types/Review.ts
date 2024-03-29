export type review = {
  comment: string;
  rating: 1 | 2 | 3 | 4 | 5;
  attraction: string;
  date: string | undefined;
  user: {
    name: string;
    image?: {
      path: string;
    };
  };
};
