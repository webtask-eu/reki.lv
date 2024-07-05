import { Comment } from "../comment/Comment";
import { Listing } from "../listing/Listing";
import { JsonValue } from "type-fest";

export type User = {
  comments?: Array<Comment>;
  createdAt: Date;
  email: string | null;
  firstName: string | null;
  id: string;
  lastName: string | null;
  listings?: Array<Listing>;
  phone: string | null;
  roles: JsonValue;
  updatedAt: Date;
  username: string;
};
