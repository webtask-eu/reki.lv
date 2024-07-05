import { CategoryWhereUniqueInput } from "../category/CategoryWhereUniqueInput";
import { CommentCreateNestedManyWithoutListingsInput } from "./CommentCreateNestedManyWithoutListingsInput";
import { UserWhereUniqueInput } from "../user/UserWhereUniqueInput";

export type ListingCreateInput = {
  category?: CategoryWhereUniqueInput | null;
  comments?: CommentCreateNestedManyWithoutListingsInput;
  description?: string | null;
  price?: number | null;
  title?: string | null;
  user?: UserWhereUniqueInput | null;
};
