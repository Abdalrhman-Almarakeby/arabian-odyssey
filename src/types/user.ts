import { Role } from "./role.ts";

export type User = {
  _id: string;
  email: string;
  attractionsAdded: {
    image: {
      path: string;
    };
    name: string;
    rating: number;
    id: string;
  }[];
  gender: "male" | "female";
  isConfirmed: boolean;
  isDeleted: boolean;
  Role: Role;
  createdAt: string;
  name: string;
  password: string;
  status: "Online" | "Offline";
  WishList: {
    image: {
      path: string;
    };
    name: string;
    rating: number;
    id: string;
  }[];
};
