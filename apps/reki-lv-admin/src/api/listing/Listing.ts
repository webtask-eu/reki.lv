import { Category } from "../category/Category";
import { Comment } from "../comment/Comment";
import { User } from "../user/User";

export type Listing = {
  category?: Category | null;
  comments?: Array<Comment>;
  createdAt: Date;
  description: string | null;
  id: string;
  price: number | null;
  title: string | null;
  updatedAt: Date;
  user?: User | null;
};
