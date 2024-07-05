import { CategoryWhereUniqueInput } from "../category/CategoryWhereUniqueInput";
import { CommentListRelationFilter } from "../comment/CommentListRelationFilter";
import { StringNullableFilter } from "../../util/StringNullableFilter";
import { StringFilter } from "../../util/StringFilter";
import { FloatNullableFilter } from "../../util/FloatNullableFilter";
import { UserWhereUniqueInput } from "../user/UserWhereUniqueInput";

export type ListingWhereInput = {
  category?: CategoryWhereUniqueInput;
  comments?: CommentListRelationFilter;
  description?: StringNullableFilter;
  id?: StringFilter;
  price?: FloatNullableFilter;
  title?: StringNullableFilter;
  user?: UserWhereUniqueInput;
};
