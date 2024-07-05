import { Listing } from "../listing/Listing";
import { User } from "../user/User";

export type Comment = {
  content: string | null;
  createdAt: Date;
  id: string;
  listing?: Listing | null;
  updatedAt: Date;
  user?: User | null;
};
