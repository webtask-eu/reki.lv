import { CategoryWhereUniqueInput } from "../category/CategoryWhereUniqueInput";
import { CommentUpdateManyWithoutListingsInput } from "./CommentUpdateManyWithoutListingsInput";
import { UserWhereUniqueInput } from "../user/UserWhereUniqueInput";

export type ListingUpdateInput = {
  category?: CategoryWhereUniqueInput | null;
  comments?: CommentUpdateManyWithoutListingsInput;
  description?: string | null;
  price?: number | null;
  title?: string | null;
  user?: UserWhereUniqueInput | null;
};
