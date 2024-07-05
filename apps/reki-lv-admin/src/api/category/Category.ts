import { Listing } from "../listing/Listing";

export type Category = {
  createdAt: Date;
  id: string;
  listings?: Array<Listing>;
  name: string | null;
  updatedAt: Date;
};
