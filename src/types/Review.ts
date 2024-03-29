export type review = {
  comment: string;
  rating: 1 | 2 | 3 | 4 | 5;
  attraction: string;
  data: string | undefined;
  user: {
    name: string;
    image?: {
      path: string;
    };
  };
};
