import { ListingWhereUniqueInput } from "../listing/ListingWhereUniqueInput";
import { UserWhereUniqueInput } from "../user/UserWhereUniqueInput";

export type CommentUpdateInput = {
  content?: string | null;
  listing?: ListingWhereUniqueInput | null;
  user?: UserWhereUniqueInput | null;
};
