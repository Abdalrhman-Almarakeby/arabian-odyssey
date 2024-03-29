import { Role } from "./role.ts";

export type User = {
  _id: string;
  email: string;
  attractionsAdded: [];
  gender: "male" | "female";
  isConfirmed: boolean;
  isDeleted: boolean;
  Role: Role;
  createdAt: string;
  name: string;
  password: string;
  status: "Online" | "Offline";
  WishList: string[];
};
