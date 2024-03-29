import { Attraction } from "./attraction.ts";
import { Role } from "./role.ts";

export type User = {
  _id: string;
  email: string;
  attractionsAdded: Attraction[];
  gender: "male" | "female";
  isConfirmed: boolean;
  isDeleted: boolean;
  Role: Role;
  location: string;
  createdAt: string;
  name: string;
  password: string;
  WishList: Attraction[];
  status: "Online" | "Offline";
};
